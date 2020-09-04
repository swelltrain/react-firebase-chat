import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB8_r6JfEiUBC-rOGZsJ4x4GJGtNkbVbpQ",
  authDomain: "chatty-682e2.firebaseapp.com",
  databaseURL: "https://chatty-682e2.firebaseio.com"
}

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
