const express = require("express");
const app =express();
app.use(express.json());
require("dotenv").config();

const port = 3000||process.config.PORT;


const db = require("./Config/database");
db()

const route = require("./Route/blog");
app.use("/api/v1",route);

app.listen(port,()=>{
    console.log("Hello this is working on port number 3000");
})