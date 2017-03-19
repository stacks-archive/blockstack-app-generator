$(document).ready(function() {
  $('#signin-button').click(function() {
    var authRequest = blockstack.makeAuthRequest()
    blockstack.redirectUserToSignIn(authRequest)
  })
  $('#signout-button').click(function() {
    blockstack.signUserOut(window.location.origin)
  })

  function showProfile(profile) {
    var person = new blockstack.Person(profile)
    $('#heading-name').html(person.name())
    $('#avatar-image').attr('src', person.avatarUrl())
    $('#section-1').hide()
    $('#section-2').show()
  }

  if (blockstack.isUserSignedIn()) {
    blockstack.loadUserData(function(userData) {
      showProfile(userData.profile)
    })
  } else if (blockstack.isSignInPending()) {
    blockstack.signUserIn(function(userData) {
      window.location = window.location.origin
    })
  } else {
    // do nothing
  }
})