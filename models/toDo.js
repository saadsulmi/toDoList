const mongoose = require("mongoose");


const toDoSchema = new mongoose.Schema({
    todolist:{
        type: String,
        required : true,
    },
})

module.exports =new mongoose.model('toDo',toDoSchema)