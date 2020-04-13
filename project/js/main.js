function handleSignUp(){
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

function handleSignIn(){
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

function handleSignOut(){
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
  });
}

const firebaseConfig = {
  apiKey: "AIzaSyCHmGJRvkvkOMInOFlq8-jupqKiVIyS3zg",
  authDomain: "fortune-20b4b.firebaseapp.com",
  databaseURL: "https://fortune-20b4b.firebaseio.com",
  projectId: "fortune-20b4b",
  storageBucket: "fortune-20b4b.appspot.com",
  messagingSenderId: "954226282245",
  appId: "1:954226282245:web:62c27a7231f9cc6755b16c",
  measurementId: "G-0W60Y84PSF"
};
