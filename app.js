const express = require("express");
const bodyParser = require("body-parser");
const request = require("request")

const app = express();


app.listen(3000,(req,res)=>{

      console.log("Server is alive and well on port 3000");

})