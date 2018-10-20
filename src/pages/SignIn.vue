<template>
  <q-page padding>
    <q-field label="Usuário"
             error-label="Preencha o usuário">
      <q-input type="text"
               v-model="form.user"
               @keyup.enter="onSignIn" />
    </q-field>
    <q-field label="Senha"
             error-label="Preencha a senha">
      <q-input type="password"
               v-model="form.password"
               @keyup.enter="onSignIn" />
    </q-field>
    <q-field class="text-right">
      <q-btn color="primary"
             label="Entre"
             class="q-mr-sm"
             @click="onSignIn" />
      <q-btn flat
             color="primary"
             label="Cadastre-se"
             @click="onRedirectToSignUp"
      />
    </q-field>
  </q-page>
</template>

<script>
import { QBtn, QField, QInput } from 'quasar'
export default {
  name: 'SignInPage',
  components: { QBtn, QField, QInput },
  data () {
    return {
      form: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    onRedirectToSignUp () {
      this.$router.push({path: '/sign-up'})
    },
    onSignIn () {
      let q = this.$q
      let router = this.$router
      this.$auth.signInWithEmailAndPassword(this.form.user, this.form.password)
        .then(() => router.push({path: '/'}))
        .catch(function (error) {
          q.notify(error.message)
        })
    }
  }
}
</script>

<style>
</style>
