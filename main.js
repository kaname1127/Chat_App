import firebase from 'firebase'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD83-kyD4napvTyL6U8guqqs-_eVXDoT-Q",
  authDomain: "chat-app-68a49.firebaseapp.com",
  databaseURL: "https://chat-app-68a49.firebaseio.com",
  projectId: "chat-app-68a49",
  storageBucket: "chat-app-68a49.appspot.com",
  messagingSenderId: "388678412082"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})