<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title>
          Quasar Firebase Auth
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          aria-label="Sair"
          v-if="userIsAuthenticated"
          @click="signOut"
        >
          <q-icon name="exit_to_app" />
        </q-btn>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  computed: {
    userIsAuthenticated () {
      let currentUser = this.$store.getters.user
      return currentUser !== null
    }
  },
  methods: {
    openURL,
    signOut: function () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
