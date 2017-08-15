var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./app/routing/apiRoutes.js");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
apiRoutes(app);




app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});