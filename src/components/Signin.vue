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
export default {
  name: 'signin',
  data () {
    return {
      blockstack: window.blockstack
    }
  },
  methods: {
    signIn () {
      const blockstack = this.blockstack
      blockstack.redirectToSignIn()
    }
  }
}
</script>

<style scoped></style>
