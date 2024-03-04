const mysql = require("mysql");
const { error } = require("console");
var express = require("express");
var app = express();
const userdata=require('./Controllers/index')
var bodyParser = require('body-parser')

app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// parse application/json
app.use(bodyParser.json())
app.use(express.static('files'))
app.use(express.static('resume'))

require('dotenv').config()
const connection = mysql.createConnection({
  host: process.env.databaseHost,
  user:process.env.databaseuser ,
  password:process.env.databasePass ,
  database:process.env.databaseName,
});
connection.connect(connection, (err) => {
  if (err) {
    console.log("database not connected");
  } else {
    console.log("connected");
  }
});
  var cors = require('cors');
  app.use(cors());
  app.use(userdata)
app.listen(process.env.PORT || 5000, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log("app listen port");
});