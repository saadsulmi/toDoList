const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/route');
const app=express();


//mongodb connection

mongoose.connect('mongodb://127.0.0.1:27017/toDoList',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open',()=>{
    console.log('database connected succefully');
})

//middlewares

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.set('view engine','ejs');

//routes

app.use('/', userRoute)

//server config

app.listen(3000,()=>{
    console.log('server started successfully 3000');
})