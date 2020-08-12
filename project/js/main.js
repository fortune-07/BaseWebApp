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

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      var email_verified = user.emailVerified;
      document.getElementById("user_para").innerHTML = "Welcome : " + email +
                                                       "<br/> verified : " + email_verified;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}

document.getElementById('login-account');
  function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);

      // ...
    });

  }
;

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  /*document.getElementById("maincontent").style.marginLeft = "300px";*/
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  /*document.getElementById("maincontent").style.marginLeft = "0";*/
  document.body.style.backgroundColor = "white";
}

/*function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}*/  