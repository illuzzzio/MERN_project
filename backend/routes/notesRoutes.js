import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{
  res.status(200).json({message:"You just fetched the notes"});
})

router.post("/", (req,res)=>{
  res.status(201).json({message:"You just created the notes"});
})

router.put("/:id", (req,res)=>{
  res.status(200).json({message:"You just updated the notes"});
})

router.delete("/:id", (req,res)=>{
  res.status(200).json({message:"You just deleted the notes"});
})
export default router ;

// now we can actually use "/" for the path "/api/notes " as we have made .use changes in the server.js file 

