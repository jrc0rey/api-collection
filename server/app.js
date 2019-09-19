const express = require('express'),
	router = express.Router(),
	app = express(),
	server = require('http').createServer(app),
  path = require('path'),
	bodyParser = require('body-parser'),
  knex = require('./db/knex'),
  home = require('./routes/home'),
  contact = require('./routes/contact'),
  login = require('./routes/login')

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.send('hello')
});

app.use('/login', login);
app.use('/home', home);
app.use('/contact', contact)




  server.listen(8000, () => {
	console.log("We Gucci on port 8000!")
})
