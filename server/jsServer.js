var express = require('express'),
    http = require('http');
var cors = require('cors');

var interest = require('./data/acting-interest.json');
var actingStyles = require('./data/acting-styles.json');
var categories = require('./data/artist-actor-categories.json');
var dancerStyles = require('./data/artist-dancer-styles.json');
var entertainerTypes = require('./data/artist-entertainer-types.json');
var fashionModel = require('./data/artist-fashion-model.json');
var instruments = require('/data/artist-musician-instruments.json');
var proCategories = require('/data/artist-production-categories.json');
var proFashion = require('/data/artist-professional-fashion.json');

var app = express()
    .use(express.bodyParser())
    .use(cors())
    .use(express.static('public'));

//app.use(cors())

app.get('/interest', function  (req, res) {
  res.jsonp(interest);
});

app.get('/actingStyles', function  (req, res) {
  res.json(actingStyles);
});

app.get('/categories', function (req, res) {
  res.json(categories);
});

app.get('/dancerStyles', function  (req, res) {
  res.json(dancerStyles);
});

app.get('/entertainerTypes', function (req, res) {
  res.json(entertainerTypes);
});

app.get('/fashionModel', function  (req, res) {
  res.json(fashionModel);
});

app.get('/instruments', function  (req, res) {
  res.json(instruments);
});

app.get('/proCategories', function (req, res){
  res.json(proCategories);
});

app.get('proFashion', function (req, res){
  res.json(proFashion);
});

app.get('/*', function  (req, res) {
  res.json(404, {status: 'not found'});
});

http.createServer(app).listen(3000, function () {
  console.log("Server ready at http://localhost:3000");
});
