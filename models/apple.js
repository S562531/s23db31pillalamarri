const mongoose = require("mongoose")
const appleSchema = mongoose.Schema({
apple_name: String,
apple_price: Number,
apple_weight: Number
})
module.exports = mongoose.model("apple",appleSchema)