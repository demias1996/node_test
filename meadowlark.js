var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3800);

app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Medowlark Travel');
});

app.get('/about', function(req, res){
    res.type('text/plain');
    res.send('0 Medowlark Travel');
});

app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - page not found!');
});

app.use(function(err, req, res, next){
    console.log(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - server error!');
});

app.listen(app.get('port'), function(){
    console.log('Express start !!!! on 3800 port'+ app.get('port'));
});