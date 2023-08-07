const mongoose = require("mongoose")

const todoListSchema = mongoose.Schema({
    title: String,
    description: String,
    expireDate: Date
})

const userTodoList = mongoose.model("TodoList",todoListSchema)
module.exports = userTodoList