var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/about', function (request, response) {
  response.render('pages/about');
});

app.get('/women', function (request, response) {
  response.render('pages/women');
});

app.get('/blog', function (request, response) {
  response.render('pages/blog');
});

app.get('/contact', function (request, response) {
  response.render('pages/contact');
});

app.get('/my account', function (request, response) {
  response.render('pages/my account');
});

app.get('/men', function (request, response) {
  response.render('pages/men');
});

app.get('/cart', function (request, response) {
  response.render('pages/cart');
});

app.get('/shop', function (request, response) {
  response.render('pages/shop');
});

app.get('/login', function (request, response) {
  response.render('pages/login');
});

app.get('/logout', function (request, response) {
  response.render('pages/logout');
});

app.get('/register', function (request, response) {
  response.render('pages/register');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
