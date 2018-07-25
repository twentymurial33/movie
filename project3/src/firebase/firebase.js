import firebase from 'firebase/app';
import 'firebase/auth';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyC6omBMlrVoQIZ_BuPCifYlUv5lF17KJCs",
    authDomain: "movie-project-ee187.firebaseapp.com",
    databaseURL: "https://movie-project-ee187.firebaseio.com",
    projectId: "movie-project-ee187",
    storageBucket: "movie-project-ee187.appspot.com",
    messagingSenderId: "47392401924"
  };
  if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};