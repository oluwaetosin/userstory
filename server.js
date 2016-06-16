var express    = require('express');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var config     = require('./config');

var app = express();
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(morgan('dev'));

    app.get('*',function(req,res){
        res.sendFile(__dirname  + '/public/views/index.html');
    });
    
    app.listen(config.port,function(err){
       err ? console.log(err) : console.log("Hello world"); 
    });
