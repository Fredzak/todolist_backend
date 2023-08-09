const userModel = require("../models/userModels")

 const addUser = async (req, res)=>{
    const newUser = new userModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName:req.body.middleName,
        address:req.body.address
    })
  if(  req.headers.authorization != "9989"){
    res.status(403).json({
        message:"You are not allowed to access this page"
    })
    return
  }
    const userAdded = await newUser.save()
    if(userAdded){
        res.status(200).json({
            message:"Data founded",
            user:userAdded
        })
    }else{
        res.status(400).json({
            message:"sorry unable to create new user"
        })
    }
}
 const  getUser = async (req, res)=>{
    const users = await userModel.find({}) 
    res.status(200).json({
        message: "Users Fetched sucessfulyy",
        users: users
    })
}

const getOneUser = async (req,res)=>{
    console.log(req.params)
    const user = await userModel.findById(req.params.id).populate("address",["city","street","phone"]);
    if(user){
        res.status(200).json(user)
    }else{
        res.status(404).json({message:"user not found"})
    }
}

module.exports = {
    getUser, addUser,getOneUser
}