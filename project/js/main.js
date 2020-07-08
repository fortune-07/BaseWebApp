let carts = document.querySelectorAll('.add-cart');

for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers();
  })
} 

var firebaseConfig = {
  apiKey: "AIzaSyD-pRgQz1p_tlE00KtC4HvwBnM575dExqQ",
  authDomain: "mwagambo-cfa3a.firebaseapp.com",
  databaseURL: "https://mwagambo-cfa3a.firebaseio.com",
  projectId: "mwagambo-cfa3a",
  storageBucket: "mwagambo-cfa3a.appspot.com",
  messagingSenderId: "775908781299",
  appId: "1:775908781299:web:4ec58d1571c286ac415b86",
  measurementId: "G-SPH6WRMQB2"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function login(){

  window.alert("working@!");
  
}

const auth = firebase.auth();

function signIn(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value. password.value);
  promise.catch(e => alert(e.maessage))

  alert("signed Up");
}

function signInWithEmailAndPassword(){
  firebase.auth().signUnWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

function createUserWithEmailAndPassword(){
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    alert("signed Up");
  });
}

function handleSignIn(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user.email);
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
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

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}    