var mysql = require('mysql');
var express = require('express');
var moment = require('moment');
var app = express();
var port = 3000;
var {getHomePage} = require('./routes/index');
var {getCheckout} = require('./routes/checkout');

app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.locals.moment = moment;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Mabes!042508',
  database : 'bellatech'
});

connection.connect();

global.connection = connection;
app.use(express.static(__dirname + '/public'));
app.get('/', getHomePage);
app.get('/checkout', getCheckout);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
