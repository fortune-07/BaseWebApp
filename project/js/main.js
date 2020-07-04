let carts = document.querySelectorAll('.add-cart');

for (let i=0; i < carts.length; i++) {
  console.log("my loop");
}

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

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
        