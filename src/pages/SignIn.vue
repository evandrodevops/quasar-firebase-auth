<template>
  <q-page padding>
    <q-field label="Usuário"
             error-label="Preencha o usuário">
      <q-input type="text"
               v-model="login.user"
               @keyup.enter="submitForm" />
    </q-field>
    <q-field label="Senha"
             error-label="Preencha a senha">
      <q-input type="password"
               v-model="login.password"
               @keyup.enter="submitForm" />
    </q-field>
    <q-field>
      <q-btn color="primary"
             class="full-width"
             label="ENTRAR"
             @click="submitForm"
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
      login: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm () {
      let q = this.$q
      this.$auth.signInWithEmailAndPassword(this.login.user, this.login.password)
        .then(() => this.$router.push({path: '/'}))
        .catch(function (error) {
          q.notify('error.code: ' + error.code + ', error.message: ' + error.message)
        })
    }
  }
}
</script>

<style>
</style>
