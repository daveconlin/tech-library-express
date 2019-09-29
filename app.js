var mysql      = require('mysql');
var express = require('express');
// var nunjucks = require('nunjucks');
var app = express();
var port = 3000;

app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Mabes!042508',
  database : 'bellatech'
});

connection.connect();

global.connection = connection;

var {getHomePage} = require('./routes/index');


//
// nunjucks.configure('views', {
//     autoescape: true,
//     express: app
// });
//
// app.get('/', function(req, res) {
//     res.render('index.html');
// });



// var books = connection.query('SELECT * from `books`', function (error, results, fields) {
//   if (error) throw error;
//   return results;
// });

// app.get('/', (req, res) => res.send(function(){
//   books.forEach(function(result){
//     console.log("("+result.author+")", result.title);
//   });
//   res.render('index', { title: 'Hey', message: 'Hello there!' })
// }))

// app.get('/', function (req, res) {
//   res.render('index', { title: 'Hey', message: 'Hello there!' })
// })

app.get('/', getHomePage);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// connection.end();
