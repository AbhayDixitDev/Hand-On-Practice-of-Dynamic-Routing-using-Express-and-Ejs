const express = require('express')  
const app = express()
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index");
});
app.get("/profile/:user",function(req,res){
    res.send("profile of "+req.params.user);
});

app.get("/author/:user/:age",function(req,res){
    res.send(`welcome, ${req.params.user} your age is ${req.params.age} `);
});


app.listen(3000,function(){
    console.log("server is running");
})