const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Re-write 11232018
var server = express();


const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: false }));

server.get('/', function(req, res){
  
  res.sendFile(__dirname + "/" + "homepage.html");
});

server.get('/symp', function(req, res){
  console.log("req symp received");
  res.sendFile(__dirname + "/homepage.html");
});

server.use(function (req, res, next) {
  res.status(404).send("(404) Page not found!")
});

server.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('(500) Server error!!')
});

//server.use((req, res) => res.sendFile(INDEX) );
server.listen(PORT, () => console.log(`Listening on ${ PORT }`));


