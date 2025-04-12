const express =require("express");
const app=express();
const dotenv=require('dotenv');
const mongoose=require("mongoose");
require('dotenv').config();
const userData =require("./models/userDataModel");
const userDataRoute=require("./routes/userDataRoute");
 app.use(express.json());
app.get("/", (req,res)=>{
  res.send("aap is running");
});

mongoose.connect(process.env.MONGODB_URL|| "mongodb+srv://vaibhav16feb1997:MZPcGJWXQYYppVS9@cluster0.wwcdgvb.mongodb.net/april")
.then(()=>{
    console.log("connected");
    app.listen(process.env.PORT || 5000, (err) => {
        if (err) console.log(err);
        console.log(`running at port 5000`);
      });
    })
    .catch((error) => console.log("Failed to connect", error));
app.get("/", (req,res)=>{
res.send("app is running.")
});
//app.use(userDataRoute);
//app.listen(5000);