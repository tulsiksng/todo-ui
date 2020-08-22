var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(express.static('public'))
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/login.html'); 
 });

 app.get('/home', function(req, res){
    res.sendFile(__dirname + '/views/index.html'); 
  });

//  app.get('/edit', function(req, res){
//      if(req.query.id!=null){
//          res.sendFile(__dirname + '/views/editableIndex.html'); 
//      }
//     res.send("This id doesnt exist in the system");
//  });
//Require the Router we defined in movies.js
var routes = require('./routes/routes.js');

//Use the Router on the sub route /movies
app.use('/todos', routes);

app.listen(3000);