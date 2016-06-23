var express    = require('express');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var config     = require('./config');
var mongoose   = require('mongoose');

mongoose.connect(config.database,function(err){
    if(err){
        console.log(e);
    }else{
        console.log("connected");
    }
});
var app = express();
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    var api = require("./app/routes/api");
    
    app.use('/api',api);
    app.get('*',function(req,res){
        res.sendFile(__dirname  + '/public/views/index.html');
    });
    
    app.listen(config.port,function(err){
       err ? console.log(err) : console.log("Hello world"); 
    });
