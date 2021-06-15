const express = require ("express");
const app = express();
const port = 3030;
const path = require("path");

app.get("/home",(req,res) => res.sendFile(path.join(__dirname,"views","index.html")));


app.listen(port,() =>console.log("servidor corriendo en http://localhost:" + port))