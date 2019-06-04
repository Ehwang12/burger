var connection = require('../config/connection.js');

    //select all data from burgers table
    function selectAll() {
        //query all info from burgers_db
        var queryString = "SELECT * FROM burgers;"
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    };

    //insert new burger into database
    function insertOne(newBurger) {
        //insert new burger into table and input devoured boolean value
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)"
        connection.query(queryString, newVal , function(err, res){
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    };

    //update burgers on table from uneaten to devoured
    function updateOne(boolean, id) {
        //when devoured button clicked it should update the table and update devoured value 
        var queryString = "UPDATE burgers SET devoured = ? WHERE id = ? ;"
        connection.query(queryString, [boolean], function(err, res){
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    };

    module.exports = {
        selectAll, 
        insertOne,
        updateOne
    };


