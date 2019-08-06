import * as blockstack from 'blockstack'

const appConfig = new blockstack.AppConfig()
const userSession = new blockstack.UserSession({ appConfig: appConfig })

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('signin-button').addEventListener('click', function (event) {
      event.preventDefault()
      userSession.redirectToSignIn()
    })
    document.getElementById('signout-button').addEventListener('click', function (event) {
      event.preventDefault()
      userSession.signUserOut(window.location.href)
    })

    function showProfile(profile) {
      var person = new blockstack.Person(profile)
      document.getElementById('heading-name').textContent = person.name() ? person.name() : "Nameless Person"
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
