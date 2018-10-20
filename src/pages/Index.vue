<template>
  <q-page class="flex flex-center">
    Home do Usuário
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'IndexPage',
  computed: {
    userIsAuthenticated () {
      let currentUser = this.$store.getters.user
      return currentUser !== null
    }
  },
  mounted () {
    console.log(this.userIsAuthenticated)
  }
}
</script>
