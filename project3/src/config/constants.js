import * as firebase from "firebase";


const config = {
  apiKey: "AIzaSyC6omBMlrVoQIZ_BuPCifYlUv5lF17KJCs",
  authDomain: "movie-project-ee187.firebaseapp.com",
  databaseURL: "https://movie-project-ee187.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth