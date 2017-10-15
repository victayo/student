var http = require("http");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/student", function(request, response){
	response.render("student/index");
});

app.use(function(request, response){
	response.status(404).render("404");
});

http.createServer(app).listen(3000, function(){
	console.log("Student app started on port 3000.");
});


