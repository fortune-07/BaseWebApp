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

app.get('/women-jewelry', function (request, response) {
  response.render('pages/women-jewelry');
});

app.get('/men-jewelry', function (request, response) {
  response.render('pages/men-jewelry');
});

app.get('/blog', function (request, response) {
  response.render('pages/blog');
});

app.get('/contact', function (request, response) {
  response.render('pages/contact');
});

app.get('/new-arrival', function (request, response) {
  response.render('pages/new-arrival');
});

app.get('/men-shoes', function (request, response) {
  response.render('pages/men-shoes');
});

app.get('/women-shoes', function (request, response) {
  response.render('pages/women-shoes');
});

app.get('/cart', function (request, response) {
  response.render('pages/cart');
});

app.get('/hot-items', function (request, response) {
  response.render('pages/hot-items');
});

app.get('/customer', function (request, response) {
  response.render('pages/customer');
});

app.get('/account', function (request, response) {
  response.render('pages/customer/account');
});

app.get('/activate-account', function (request, response) {
  response.render('pages/customer/activate-account');
});

app.get('/login', function (request, response) {
  response.render('pages/customer/login');
});

app.get('/logout', function (request, response) {
  response.render('pages/customer/logout');
});

app.get('/order', function (request, response) {
  response.render('pages/customer/order');
});

app.get('/create', function (request, response) {
  response.render('pages/customer/create');
});

app.get('/reset-password', function (request, response) {
  response.render('pages/customer/reset-password');
});

app.get('/shipping-policy', function (request, response) {
  response.render('pages/shipping-policy');
});

app.get('/terms-conditions', function (request, response) {
  response.render('pages/terms-conditions');
});

app.get('/payment-policy', function (request, response) {
  response.render('pages/payment-policy');
});

app.get('/return-policy', function (request, response) {
  response.render('pages/return-policy');
});

app.get('/nike-air-jordan-13', function (request, response) {
  response.render('pages/nike-air-jordan-13');
});

app.get('/nike-air-jordan-13-black', function (request, response) {
  response.render('pages/nike-air-jordan-13-black');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
