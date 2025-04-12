const mongoose=require("mongoose");

const userDataSchems= new mongoose.Schema(
    {
        name:{
                type:String,
                require:true,
        },
        email:{
                 type:String,
                 require:true,
                 unique:true
        },
        age:{
                 type:Number,
                 require:true
        },
    },
    {timestamps:true}
)

const userData= mongoose.model("UserData",userDataSchems);

module.exports =userData;