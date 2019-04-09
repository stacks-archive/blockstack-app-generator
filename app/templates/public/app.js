document.addEventListener("DOMContentLoaded", event => {
  let appConfig = {
    scopes: [],
    appDomain: window.location.origin,
    redirectPath: '',
    manifestPath: '/manifest.json',
    coreNode: null,
    authenticatorURL: 'https://browser.blockstack.org/'
  }

  let UserSession = new blockstack.UserSession(appConfig)

  document.getElementById('signin-button').addEventListener('click', event => {
    event.preventDefault()
    UserSession.redirectToSignIn()
  })

  document.getElementById('signout-button').addEventListener('click', event => {
    event.preventDefault()
    UserSession.signUserOut()
    window.location = window.location.origin
  })

  function showProfile (profile) {
    let person = new blockstack.Person(profile)
    document.getElementById('heading-name').innerHTML = person.name() ? person.name() : "Nameless Person"
    if(person.avatarUrl()) {
      document.getElementById('avatar-image').setAttribute('src', person.avatarUrl())
    }
    document.getElementById('section-1').style.display = 'none'
    document.getElementById('section-2').style.display = 'block'
  }

  if (UserSession.isUserSignedIn()) {
    const { profile } = UserSession.loadUserData()
    showProfile(profile)
  } else if (UserSession.isSignInPending()) {
    UserSession.handlePendingSignIn().then(userData => {
      window.location = window.location.origin
    })
  }
})
