var express = require('express')
	, engine = require('ejs-locals')





var app = express();

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs'); // so you can render('index')

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());
app.use(express.logger()); 

// Bootstrap routes
require('./routes')(app)


// listen to the PORT given to us in the environment
var port = process.env.PORT || 5600;

//Server must listen instead of app, since socket.io is attached to the server
app.listen(port, function(){
	console.log("Listening on " + port);
});