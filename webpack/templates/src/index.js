import * as blockstack from 'blockstack'
import { showBlockstackConnect } from '@blockstack/connect';

const appConfig = new blockstack.AppConfig()
const userSession = new blockstack.UserSession({ appConfig: appConfig })

document.addEventListener("DOMContentLoaded", function () {
  const authOptions = {
    appDetails: {
      name: 'Blockstack App',
      icon: window.location.origin + '/favicon.ico'
    },
    userSession,
    finished: ({ userSession }) => {
      const profile = userSession.loadUserData().profile;
      showProfile(profile);
    }
  }

  document.getElementById('signin-button').addEventListener('click', function (event) {
    event.preventDefault()
    showBlockstackConnect(authOptions)
  })
  document.getElementById('signout-button').addEventListener('click', function (event) {
    event.preventDefault()
    userSession.signUserOut(window.location.href)
    window.location = window.location.origin
  })

  function showProfile(profile) {
    var person = new blockstack.Person(profile)
    const username = userSession.loadUserData().username

    document.getElementById('heading-name').textContent = person.name() || username || "Nameless Person"
    if (person.avatarUrl()) {
      document.getElementById('avatar-image').setAttribute('src', person.avatarUrl())
    }
    else {
      document.getElementById('avatar-image').setAttribute('src', './avatar-placeholder.png')
    }
    document.getElementById('section-1').style.display = 'none'
    document.getElementById('section-2').style.display = 'block'
  }

  if (userSession.isUserSignedIn()) {
    var profile = userSession.loadUserData().profile
    showProfile(profile)
  } else if (userSession.isSignInPending()) {
    userSession.handlePendingSignIn().then(function (userData) {
      window.location = window.location.origin
    })
  }
})
