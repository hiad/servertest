const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require('./Routes/userRoutes');

const db = mongoose.connect('mongodb://hectortest:hectortest2014@ds141294.mlab.com:41294/zemogatest', { useNewUrlParser: true });

const app = express();

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/userRoutes.js")(app);

const PORT = 3010;

var server = app.listen(PORT, () => console.log('Running on port', PORT));
server.timeout = 6000;