import * as blockstack from 'blockstack';

document.addEventListener('DOMContentLoaded', function () {

  // TODO: toasts for upload and delete events

  const appConfig = new blockstack.AppConfig();
  const userSession = new blockstack.UserSession({ appConfig: appConfig });

  document.getElementById('signin-button').addEventListener('click', event => {
    event.preventDefault();
    userSession.redirectToSignIn();
  });
  document.getElementById('signout-button').addEventListener('click', event => {
    event.preventDefault();
    userSession.signUserOut(window.location.href);
  });

  // Setup file upload via `<input type="file">` element
  document.getElementById('photo-upload-input').addEventListener('change', (event) => {
    const file = event.target.files[0]
    if (file) {
      event.target.value = null;
      uploadFile(file);
    }
  });

  // Setup file upload via Drag & Drop API
  document.body.addEventListener('drop', event => {
    const file = event.dataTransfer.files[0];
    if (file) {
      uploadFile(file);
    }
  }, false);
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    document.body.addEventListener(eventName, event => {
      event.preventDefault();
      event.stopPropagation();
    }, false);
  });

  function showProfile(profile) {
    var person = new blockstack.Person(profile);
    document.getElementById('heading-name').textContent = person.name() ? person.name() : 'Nameless Person';
    if (person.avatarUrl()) {
      document.getElementById('avatar-image').setAttribute('src', person.avatarUrl());
    }
    else {
      document.getElementById('avatar-image').setAttribute('src', './avatar-placeholder.png');
    }
    document.getElementById('section-1').style.display = 'none';
    document.getElementById('section-2').style.display = 'block';

    loadPhotos();
  }

  // Handle user authentication.
  if (userSession.isUserSignedIn()) {
    const profile = userSession.loadUserData().profile;
    showProfile(profile);
  } else if (userSession.isSignInPending()) {
    userSession.handlePendingSignIn().then(userData => {
      history.replaceState({}, document.title, location.pathname);
      showProfile(userData.profile);
    });
  }

  /**
   * Perform `listFiles` to get all file names.
   * Then perform `getFile` on each file name with a `photo/` prefix.
   */
  async function loadPhotos() {
    try {
      // Fetch list of files.
      let fileNames = [];
      await userSession.listFiles(name => fileNames.push(name));

      // Filter for files starting with the photo prefix and sort.
      fileNames = fileNames.filter(name => name.startsWith('photos/')).sort();

      // Create loading display cards for each image.
      const photoCardSetups = fileNames.map(name => {
        const title = name.replace(/^photos\/(\d+_)*/, '');
        return setupPhotoCard(title, name);
      });

      // Fetch each file and display in image card.
      for (let i = 0; i < fileNames.length; i++) {
        try {
          const fileData = await userSession.getFile(fileNames[i]);
          photoCardSetups[i](null, URL.createObjectURL(new Blob([fileData])));
        } catch (error) {
          photoCardSetups[i](error);
        }
      }
    } catch (error) {
      displayErrorModal('Error loading photos', error);
    }
  }

  /**
   * Check if given file is a valid image that can be displayed in an <img> tag.
   * @param {File} file
   */
  async function isValidImageFile(file) {
    const objectUrl = URL.createObjectURL(file);
    try {
      return await new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(true);
        image.onerror = () => reject();
        image.src = objectUrl;
      });
    } catch (error) {
      return false;
    } finally {
      URL.revokeObjectURL(objectUrl);
    }
  }

  /**
   * Perform `putFile` on a given image file.
   * Displays error if file is not a valid image.
   * @param {File} file File object obtained from an `<input type="file">` element
   * or from the `Drag and Drop API`.
   */
  async function uploadFile(file) {
    if (!await isValidImageFile(file)) {
      alert(`${file.name} is not a valid image file`);
      return;
    }
    // Upload file to a `photo` directory, and encode an upload date
    // timestamp in the name.
    const fileName = `photos/${Date.now()}_${file.name}`;
    const setImageResult = setupPhotoCard(file.name, fileName);
    try {
      const uploadResult = await userSession.putFile(fileName, file);
      console.log(`Uploaded file result: ${uploadResult}`);
      setImageResult(null, URL.createObjectURL(file));
    } catch (error) {
      setLoadedImage(error);
    }
  }

  /**
   * Perform `deleteFile` on a given file.
   * Displays error if something went wrong while deleting.
   * @param {string} fileName
   */
  async function deleteFile(fileName) {
    try {
      await userSession.deleteFile(fileName);
    } catch (error) {
      displayErrorModal(`Error deleting file ${fileName}`, error);
    }
  }

  /**
   * Create an image display card for a given file name.
   * A loading spinner is shown until its return callback is called.
   * @param {string} title
   * @param {string} fileName
   * @returns {function(Error, string):void} Callback once the file has loaded or failed.
   */
  function setupPhotoCard(title, fileName) {
    const cardTemplate = document.getElementById('image-card-template');
    const cardDeck = document.getElementById('image-cards');
    cardDeck.prepend(document.importNode(cardTemplate.content, true));
    const card = cardDeck.firstElementChild;
    card.querySelector('.card-title').textContent = title;
    card.querySelector('.delete-button').onclick = () => {
      card.remove();
      deleteFile(fileName);
    };
    // Return callback to indicate loaded image result or loading error.
    return (error, dataUri) => {
      const spinner = card.querySelector('.loading-spinner');
      spinner.classList.add('d-none');
      if (dataUri) {
        const cardImg = card.querySelector('.card-image');
        cardImg.classList.remove('d-none');
        cardImg.onload = () => URL.revokeObjectURL(dataUri);
        cardImg.src = dataUri;
      }
      if (error) {
        const errorLoading = card.querySelector('.loading-error');
        errorLoading.classList.remove('d-none');
        errorLoading.onclick = () => displayErrorModal(`Error loading ${imageName}`, error)
      }
    };
  }

  /**
   * Display an error modal dialog.
   * The error details also log to console.
   * @param {string} title
   * @param {Error} error
   */
  function displayErrorModal(title, error) {
    console.error(`Error "${title}:`);
    console.error(error);
    document.querySelector('#error-modal .modal-title').textContent = title;
    document.querySelector('#error-modal .modal-body').textContent = `${error}`;
    $('#error-modal').modal('show');
  }

  // TODO: remove debug code
  window.displayError = displayErrorModal;

});
