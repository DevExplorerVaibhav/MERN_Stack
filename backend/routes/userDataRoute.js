const express=require("express");
const router =express.Router();
const userData =require("../models/userDataModel");

//create post route
 router.post("/add/",async(req,res)=>
{
  console.log(req,body);
  const {name,email,age}=req.body;
  try{
const userAdded=await userData.create({
    name:name,
    email:email,
    age:age
})
res.status(201).json(userAdded)
  }catch(ex){
    console.log(ex);
   res.success(400).json(
    {error:ex.message})
  }
})
//get all
router.get("/", async(req,res)=>{
    try{
        const allUsers=await userData.find();
        response.status(200).json(allUsers);
    }catch(ex){
   console.log(ex);
   res.status(400).json({error:ex.message})
    }
})
///get single
router.get("/:id", async(req,res)=>{
    try{
          const {id}= req.params;
          const singleUser=await userData.findById({_id:id});
          res.status(200).json(singleUser);
    }catch(ex){
   console.log(ex);
   res.status(400).json({error:ex.message})
    }
})

//update 

router.patch("/edit/:id", async(req,res)=>{
    const{id}=req.params;
    console.log(req.body);
    console.log(id);
    try{

           const updatedUser=await userData.findByIdAndUpdate(id, req.body,
            {new:true,});
            res.status(200).json(updatedUser);
    }catch(ex){
   console.log(ex);
   res.status(400).json({error:ex.message})
    }
})
//delete
router.delete("/", async(req,res)=>{
    try{
        const {id}= req.params;
          const deleteUser=await userData.findByIdAndDelete({_id:id});
          res.status(200).json(deleteUser);
    }catch(ex){
   console.log(ex);
   res.status(400).json({error:ex.message})
    }
})
module.exports=router;