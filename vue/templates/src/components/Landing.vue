<template>
  <div class="panel-landing" id="section-1">
    <h1 class="landing-heading">Hello, Blockstack!</h1>
    <p class="lead">
      <a
        href="#"
        class="btn btn-primary btn-lg"
        id="signin-button"
        @click.prevent="signIn"
      >
        Sign In with Blockstack
      </a>
    </p>
  </div>
</template>

<script>
import { userSession } from '../userSession'
import { showBlockstackConnect } from '@blockstack/connect'
export default {
  name: 'signin',
  methods: {
    signIn () {
      const authOptions = {
        appDetails: {
          name: 'Blockstack App',
          icon: window.location.origin + '/favicon.ico'
        },
        userSession,
        finished: ({ userSession }) => {
          window.location = window.location.origin
        }
      }
      showBlockstackConnect(authOptions)
    }
  }
}
</script>

<style scoped></style>
