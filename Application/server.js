
const { error } = require('console');
var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Express is working ranjithkumar!');
});
app.get('/ranjioth', function (req, res) {
    res.send('hi ranjith ranjithkumar!');
});
app.listen((process.env.PORT || 5000),(error)=>{
    if(error){
       return console.log(error)
    }
     console.log('app listen portearewt')
});