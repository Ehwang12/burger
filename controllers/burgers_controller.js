var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//home page
router.get("/", function(req, res) {
    //use burger.selectAll(function(data) {
        console.log(data);
        res.render("index", {burgers: data});
    //})
    
});

//post route
router.post("/db/burgers", function(req, res) {
    burger.insertOne(["newBurger"], [req.body.newBurger])
});

//put route
router.put("/db/burgers/:id", function( req, res){

});

