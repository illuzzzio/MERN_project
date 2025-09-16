import express from "express";

import notesRoutes from "./routes/notesRoutes.js" // importing the file name for the file 

const app = express();


app.use("/api/notes", notesRoutes)

// app.get("/api/notes", (req,res)=>{
//   res.status(200).send("you got 25 notes");
// })

// app.post("/api/notes/:id",(req,res)=>{
//   res.status(201).json({message:"Note 1 created successfully "});
// })


// app.put("/api/notes/:id",(req,res)=>{
//   res.status(200).json({message:"Note added successfully"})
// })

// app.delete("/api/notes/:id", (req,res)=>{
//   res.status(200).json({message:"The notes has been deleted successfully"})
// })

app.listen(5001, ()=>{
  console.log("The server as been started successfully at the PORT 5001")
})