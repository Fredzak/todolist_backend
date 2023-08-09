const addressModel = require("../models/addressMOdel")

const addAddress = async(req, res)=>{
    const newAddress = new addressModel({
        street: req.body.street,
        city: req.body.city,
        phone: req.body.phone
    })
    const savedAddress = await newAddress.save();
    if(savedAddress){
        res.status(200).json({
            message: "Address Added sucessfully",
            address: savedAddress
        })
    }else{
        res.status(404).json({
            message: "Unable to add"
        })
    }
}
module.exports = {addAddress}