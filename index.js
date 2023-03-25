const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const reg = require("./models/register")




/** =========><=========== */
app.use(express.json())
app.use(cors)
mongoose.connect("mongodb+srv://gurukeish18:hello@nodututs.j2u5uyv.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Db connected"))
.catch((e)=>{console.log(e);})

app.get("/",(req,res)=>{
    return res.json({
        data:"hello bro"
    })
})

app.post("/register" ,async(req,res)=>{
    
console.log("Runinnnning=====>",req.body);
    const regs=new reg({
        name:req.body.data.name,
        Username:req.body.data.Username,
        date:req.body.data.date,
        city:req.body.data.city,
        sate:req.body.data.sate
        
    })
    try {
        await regs.save()
    }
    catch{(e)=>{console.log(e);}}

} )

app.listen(9000,()=>{
    console.log("Server connected");
})

