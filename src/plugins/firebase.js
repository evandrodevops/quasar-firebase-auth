import { config } from '../config/firebase'
import firebase from 'firebase'

const fb = firebase.initializeApp(config)
export const AUTH = fb.auth()
export const DB = fb.firestore()

export default ({ app, router, Vue }) => {
  Vue.prototype.$auth = AUTH
  Vue.prototype.$db = DB
}
