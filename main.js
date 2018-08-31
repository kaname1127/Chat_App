import firebase from 'firebase'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAoqmw-cj39NGSD8aftdwY8m_mGpst-jTg",
    authDomain: "chatapp2-9b5c8.firebaseapp.com",
    databaseURL: "https://chatapp2-9b5c8.firebaseio.com",
    projectId: "chatapp2-9b5c8",
    storageBucket: "chatapp2-9b5c8.appspot.com",
    messagingSenderId: "939432769696"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})