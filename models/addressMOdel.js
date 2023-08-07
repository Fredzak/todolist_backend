const mongoose = require("mongoose")
const addressSchema = mongoose.Schema({
    street: String,
    city: String,
    phone: Number
})
const addressModel = mongoose.model("adress", addressSchema)
module.exports = addressModel