<template>
  <div id="app">
    <div class="site-wrapper">
      <div class="site-wrapper-inner">
        <profile v-if="user" :user="user" :signOut="signOut"/>
        <sign-in v-else/>
        <!-- <router-view/> -->
      </div>
    </div>
  </div>
</template>

<script>

import Profile from '@/components/Profile'
import SignIn from '@/components/SignIn'

export default {
  name: 'app',
  components: {Profile, SignIn},
  mounted () {
    const blockstack = this.blockstack
    if (blockstack.isUserSignedIn()) {
      this.user = blockstack.loadUserData().profile
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn()
      .then((userData) => {
        window.location = window.location.origin
      })
    }
  },
  data () {
    return {
      blockstack: window.blockstack,
      user: null
    }
  },
  methods: {
    signOut () {
      this.blockstack.signUserOut(window.location.href)
      console.log(this.user)
      this.user = null
      console.log(this.user)
    }
  }
}
</script>

<style src="./assets/styles.css"></style>
