var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

var path = require('path');

var pg = require('pg');
var connectionString = '';
if(process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/tasklist';
}


app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 5000);

app.get('/*', function(req, res) {
    console.log("Here is the request: " , req.params);
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public/', file));
});

app.listen(app.get('port'), function() {
    console.log('Server is ready on port ' + app.get('port'));
});