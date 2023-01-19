/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Varun Chhabra Student ID: 170279210 Date: 18 Jan 2023
*
*  Cyclic Web App URL: https://fine-blue-sparrow-tam.cyclic.app/
*
*  GitHub Repository URL: https://github.com/VarunxChhabra/ass1-Web-322
*
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Varun Chhabra - 170279210");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);