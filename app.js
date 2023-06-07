const express = require('express');
const mongoose = require('mongoose');

const app=express();


//mongodb connection

mongoose.connect('mongodb://127.0.0.1:27017/toDoList',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
});


//middlewares

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use('view engine','ejs');

//routes

app.use(require('./routes/route'));

//server config

app.listen(3000,()=>{
    console.log('server started successfully');
})