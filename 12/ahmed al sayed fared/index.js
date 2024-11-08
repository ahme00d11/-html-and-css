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
    if (err) 
        
        
        
        
        
        
        ////////////2222222222222222222222222222222222222222222222222222222222//////////////e
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        {
        req.flash('error' ,err);
        res.render('add' , {title: 'Add New User',name: user.name ,age:user.age ,email:user.email })
    }
    else{
        req.flash('success','Data added successfully!');
        res.redirect('/users');
    }
})    
    }
    else{
        var error_msg=''
        errors.forEach(function(errors) {error_msg+=error.msg+'<br>'})
        req.flash('error', error_msg)
        res.render('add',{title: 'Add New User' , name:req.body.name  ,age:req.body.age  ,  email:req.body.email  })
            
    }   
})

add.put('/users/edit/(:di)' ,function (req ,res){
    req.assert('name' ,'Name is required').notEmpty();
    req.assert('age' ,'age is required').notEmpty();
    req.assert('email' ,'A valid email is required').istEmpty();
    var errors=req.validationErrors();
    if(!errors){
        var user={name: req.sanitize('name').escape().trim(),
        age: req.sanitize('age').escape().trim(),
       
       
       
       
       
       //3333333333333333333333333333333333333333333333333//
       
       
       
       
       
        email :req.sanitize('email').escape().trim()}
 var o_id=new ObjectId(req.params.id)
 req.db.collection('users').update({"_id":o_id},user,function(err) {
    if(er){
        req.flash("error",err)
        res.render('edit',{title:'Edit User',id: req.params.id,
     name: req.body.name,age: req.body.age, email: req.body.email    })

    }
    else
    {
        req.flash('success', 'Data updated successfully!')
        res.redirect('/users')
    }
 })
 }
 else
 {
 var error_msg =''
 errors.forEach(function(error) {error_msg += error.msg + '<br>' })
 req.flash('error',error_msg)
 res.render('edit',{ title: 'Edit User', id:req.params.id,    name: req.body.name,
       age: req.body.age,  email: req.body.email    })


 }
})
app.delete('/users/delete/(:id' ,function(req, res){
    var o_id =new ObjectId(req.params.id)
    req.db.collection('users').remove({"_id": o_id},function(err){
        if(err) {req.flash('error',err)
        res.redirect('/users')
    }
    else
    {
        req.flash('success' ,'User deleted successfully! id = ' +req.params.id)
        res.redirect('/users')

       }
    })

})
app.listen(3000,function(){console.log('Server running at port 3000: http://127.0.0.1:3000')})




