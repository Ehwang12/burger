var sqlConnection = require('../config/connection.js');

var sqlCommands = function() {
    function selectAll() {
        //connection query to selecting all data from burgers table
        connection.query("SELECT * FROM burgers", function(err, res){
            res.render("index", {burgers: res});
        });
    };
    function insertOne() {
        //connection query to Insert data into burgers table
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (? , ?)", , function(err, res){
    });
    function updateOne() {
        //connection query to update burgers table
        connection.query("UPDATE burgers SET ", function(err, res){
    });
};

module.exports = sqlCommands;