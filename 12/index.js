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
 }-)
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
        if(err) {req.flash('erro',err)
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