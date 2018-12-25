var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.get('/', function(req, res){
    res.render('home.ejs');
});

app.listen(8000, function(){
    
});