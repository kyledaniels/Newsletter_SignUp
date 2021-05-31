const express = require("express");
const bodyParser = require("body-parser");
const request = require("request")

const app = express();

app.use(express.static("public"));

app.get("/",(req,res)=>{
      
    res.sendFile(__dirname + "/signup.html");

})




app.listen(3000,(req,res)=>{

      console.log("Server is alive and well on port 3000");

})