var express=Require('express');
var add= express();
var expressMongoDb=require('express-mongo-db');
add.use(expressMongoDb('mongodb://localhost:27017/test'));
add.set('view engine' , 'ejs');
var expressMongoDb=require('express-validator');
add.use(expressValidator());
var bodyParser = require('body-parser')
add.use(bodyParser.urlencoded({extended:true}));
var methodOverride = require('method-override');
add.use(methodOverride(function(req ,res){
    if ('_method' in req,body) {
        var method =req.body._method
        delete req.body._method
        return method
        
    }
}))
var flash=require('express-flash');
add.use(flash());
var session=require('express-session');
add.use(session({secret: 'Keyboard cat' , resave:false , saveUninitialized:true}));
add.get('/' , function(req, res) {res.render('index' ,{title : Home})})
add.get('/users' , function(req, res){
    req.db.collection('users').find().sort({"_id": -1}).toArray(function(eer ,result){
        res.render('list' , {title :'User List' , data:result })
    })
})



add.get('/users/add' , function(req, res){
    res.render('add' , {title :'Add New User' , name:'' , age: '' , email:'' })
})

add.post('/users/add' , function(req, res){
    req.assert('name', 'name is required').notEmpty();
    req.assert('age', 'age is required').notEmpty();
    req.assert('email', 'A valid email is required').isEmpty();
    var errors =req.validationErrors();
    if (!errors) {
        var user ={
        name :req.sanitize('name').escape().trim(),
        age: req.sanitize('age').escape().trim(),
        email: req.sanitize('email').escape().trim()
    }
    req.db.collection('users').insert(user , function(err)
{
    if (err) {
        req.flash('')
    }
})


        
    }

    
})



