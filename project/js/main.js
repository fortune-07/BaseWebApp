function handleRegister(){
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(email.password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }); 
}

function handleLoginFormSubmit(){
  var postUsername = $("uname").val();
  var postPassword = $("psw").val();
  console.log(postUsername);
}

function handleMessageFormSubmit(){
  var postTitle = $("post-title").val();
  var postBody = $("post-body").val();
  console.log(postTitle);
}