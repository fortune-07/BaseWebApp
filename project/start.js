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
  response.render('pages/account');
});

app.get('/create', function (request, response) {
  response.render('pages/create');
});

app.get('/login', function (request, response) {
  response.render('pages/login');
});

app.get('/logout', function (request, response) {
  response.render('pages/logout');
});

app.get('/order', function (request, response) {
  response.render('pages/order');
});

app.get('/create', function (request, response) {
  response.render('pages/customer/create');
});

app.get('/reset-password', function (request, response) {
  response.render('pages/reset-password');
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

app.get('/size-info', function (request, response) {
  response.render('pages/size-info');
});

app.get('/BV0073-101-Nike-LDWaffle-x-Sacai-White', function (request, response) {
  response.render('pages/BV0073-101-Nike-LDWaffle-x-Sacai-White');
});

app.get('/CV0258-100-Nike-Air-Force-1-Be-True-White', function (request, response) {
  response.render('pages/CV0258-100-Nike-Air-Force-1-Be-True-White');
});

app.get('/FX9035-adidas-Yeezy-Boost-350-V2-Desert-Sage', function (request, response) {
  response.render('pages/FX9035-adidas-Yeezy-Boost-350-V2-Desert-Sage');
});

app.get('/DA1911-102-Nike-Air-Jordan-5-Retro-Fire-Red', function (request, response) {
  response.render('pages/DA1911-102-Nike-Air-Jordan-5-Retro-Fire-Red');
});

app.get('/CT4954-007-Nike-Air-Jordan-6-Retro-DMP', function (request, response) {
  response.render('pages/CT4954-007-Nike-Air-Jordan-6-Retro-DMP');
});

app.get('/Korean-Sweet-Flower-Earrings', function (request, response) {
  response.render('pages/Korean-Sweet-Flower-Earrings');
});

app.get('/Golden-Star-Stud-Ear-Earrings-big', function (request, response) {
  response.render('pages/Golden-Star-Stud-Ear-Earrings-big');
});

app.get('/BV0073-002-Nike-LDWaffle-x-Sacai-Black-Nylon', function (request, response) {
  response.render('pages/BV0073-002-Nike-LDWaffle-x-Sacai-Black-Nylon');
});

app.get('/led-luminous-Diamond-Wrist-watch', function (request, response) {
  response.render('pages/led-luminous-Diamond-Wrist-watch');
});

app.get('/Patel-Philippe-Calatrava BLack-Curren-Watch', function (request, response) {
  response.render('pages/Patel-Philippe-Calatrava BLack-Curren-Watch');
});

app.get('/nike-air-jordan-13', function (request, response) {
  response.render('pages/nike-air-jordan-13');
});

app.get('/884129-404-Nike-Air-Jordan-13-Retro-GS-FlintNavy', function (request, response) {
  response.render('pages/884129-404-Nike-Air-Jordan-13-Retro-GS-FlintNavy');
});

app.get('/adidas-yeezy-boost-350-asia', function (request, response) {
  response.render('pages/adidas-yeezy-boost-350-asia');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
