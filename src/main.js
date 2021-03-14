import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBGXohNFCOBRJHsaV70pjUYhlE-XkTHjFI",
    authDomain: "vue09-c5288.firebaseapp.com",
    projectId: "vue09-c5288",
    storageBucket: "vue09-c5288.appspot.com",
    messagingSenderId: "874568752312",
    appId: "1:874568752312:web:440ae957bf700b7f36684d",
    measurementId: "G-W4YQL4VFD1"
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')