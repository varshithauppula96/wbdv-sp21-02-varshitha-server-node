const mongoose=require("mongoose")
const userSchema =mongoose.schema({firstName:String,
    lastName :String,
    userName :String,
    password: String
},{collection:"users"})

module.exports = userSchema