const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName : String,
    middleName:String,
    lastName:String,
    age:Number,
    address:  { type: mongoose.Schema.Types.ObjectId, ref: 'adress' }
    
})

const userModel = mongoose.model("User",userSchema)

module.exports = userModel