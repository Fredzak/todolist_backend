const todoList = require("../models/todoList")
const addTodoList = async (req, res)=>{
    const newAddress = new todoList({
        title: req.body.title,
        description: req.body.description,
        expireDate: req.body.expireDate

    })
    const saveTodoList = await newAddress.save();
    if(saveTodoList){
        res.status(200).json({
            message: "Added Succesfully",
            todoList: saveTodoList
        })
    }else{
        res.status(404).json({
            message: "No Lists"
        })
    }
}
const  getTodoList = async (req, res)=>{
    const lists = await todoList.find({}) 
    res.status(200).json(
        lists
    )
}
module.exports = {addTodoList, getTodoList}
