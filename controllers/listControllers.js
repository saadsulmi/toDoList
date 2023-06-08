
const ToDo = require('../models/toDo');


const listed=async(req,res)=>{
    try{
        if(req.body.todo){
            let data = req.body.todo;
            let newList = await new ToDo({
                todolist : req.body.todo
            })
            await newList.save();
            console.log(data);
            
        }
        const alldata = await ToDo.find();
        
        res.render('todoPage',{data:alldata});
    }
    catch(err){
        console.log(err.message);
    } 
}
const deleteList = async (req, res,) => {

    try {
        const todoId = req.query.id;
        console.log(todoId);
        await ToDo.deleteOne({_id: todoId })
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    listed,
    deleteList
}