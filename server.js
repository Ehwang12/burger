//set up dependencies
const express = require("express");
var handlebars = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Import routes and give the server access to them.
require("./controllers/burgers_controller.js")(app);  
  
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });
  