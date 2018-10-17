<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'IndexPage',
  mounted () {
    console.log('Index Page')
    console.log('-- Firebase AUTH')
    console.log(this.$auth)
    console.log('-- Firebase DB')
    console.log(this.$db)
  }
}
</script>
