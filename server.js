// var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var orm = require('./config/orm.js');
var beers = require('./models/beers.js');
var methodOverride = require('method-override');
var app = express();


app.use(bodyParser.urlencoded({
  extended: false
}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var PORT = process.env.PORT || 3000;
app.use(express.static("public"));
app.listen(PORT);

app.get('/', function(req, res) {
  beers.all(function(beerData){
    var tried = [];
    var untried = [];
    for (i=0; i < beerData.length; i++) {
      if (beerData[i].triedIt == true) {
        tried.push(beerData[i]);
      } else {
        untried.push(beerData[i]);
      }
    }
    var hbsCandy = {todoBeer: untried, doneBeer: tried};
    res.render('index', hbsCandy);
  });
} );

app.post('/api/newBeer', function(req, res){
  console.log(req.body.newBeerName);
  beers.addBeer(['beer_name'], [req.body.newBeerName], function(data)
  {
    res.redirect('/');
  });
});

app.post('/api/triedBeer/:id', function (req, res) {
  var currentBeer = req.params.id;
  console.log("current beer is "+currentBeer);
  beers.updateBeer(currentBeer, ['triedIt'], true, function(data) 
  {
    res.redirect('/');
  });
});

// app.get('/api/triedBeer/:ID', function (req, res) {
//   var currentBeer = req.param.ID;
//   console.log("current beer is "+currentBeer);
//   beers.updateBeer(currentBeer, ['triedIt'], true, function(data) 
//   {
//     res.redirect('/');
//   });
// });