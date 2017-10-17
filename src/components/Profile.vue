<template>
  <div class="panel-welcome" id="section-2">
    <div class="avatar-section">
      <img :src="avatar" class="img-rounded avatar" id="avatar-image">
    </div>
    <h1>Hello, <span id="heading-name">{{ givenName }}</span>!</h1>
    <p class="lead">
      <a
        href="#"
        class="btn btn-primary btn-lg"
        id="signout-button"
        @click.prevent="signOut"
      >
        Logout
      </a>
    </p>
  </div>
</template>

<script>
export default {
  props: ['signOut'],
  data () {
    return {
      blockstack: window.blockstack,
      avatar: 'https://s3.amazonaws.com/onename/avatar-placeholder.png',
      givenName: 'Anonymous'
    }
  },
  mounted () {
    const blockstack = this.blockstack
    if (blockstack.isUserSignedIn()) {
      const profile = blockstack.loadUserData().profile
      const user = new blockstack.Person(profile)
      this.givenName = user.name()
      if (user.avatarUrl()) this.avatar = user.avatarUrl()
      console.log(user.avatarUrl())
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn()
      .then((userData) => {
        window.location = window.location.origin
      })
    }
  }
}
</script>

<style scoped></style>
