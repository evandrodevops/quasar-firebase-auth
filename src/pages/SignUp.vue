<template>
  <q-page padding>
    <q-field label="Usuário"
             error-label="Preencha o usuário">
      <q-input type="text"
               v-model="form.email"
               @keyup.enter="onSignup" />
    </q-field>
    <q-field label="Senha"
             error-label="Preencha a senha">
      <q-input type="password"
               v-model="form.password"
               @keyup.enter="onSignup" />
    </q-field>
    <q-field label="Confirmação da Senha"
             error-label="Preencha a confirmação da senha">
      <q-input type="password"
               v-model="form.passwordConfirmation"
               @keyup.enter="onSignup"
               :rules="[comparePasswords]"/>
    </q-field>
    <q-field>
      <q-btn color="primary"
             class="full-width"
             label="SALVAR"
             @click="onSignup"
      />
    </q-field>
  </q-page>
</template>

<script>
import { QBtn, QField, QInput } from 'quasar'
export default {
  name: 'SignUpPage',
  components: { QBtn, QField, QInput },
  data () {
    return {
      form: {
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  computed: {
    comparePasswords () {
      return this.form.password !== this.form.passwordConfirmation ? 'Passwords do not match' : ''
    },
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignup () {
      let q = this.$q
      this.$store.dispatch('signUserUp', {email: this.form.email, password: this.form.password})
        .then(() => this.$router.push({path: '/profile'}))
        .catch(function (error) {
          q.notify(error.message)
        })
    }
  }
}
</script>

<style>
</style>
