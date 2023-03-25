

const mongoose = require("mongoose")
const regSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Username:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    sate:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model("Reg",regSchema)
