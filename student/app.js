var http = require("http");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var studentRouter = require("./routes/student.js");

var app = express();
var dbName = 'student';

var connectionString='mongodb://127.0.0.1:27017/'+dbName;
if(process.env.OPENSHIFT_MONGODB_DB_URL){
  connectionString = process.env.OPENSHIFT_MONGODB_DB_URL + dbName;
}

mongoose.connect(connectionString);
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "public")));

app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function(request, response){
    response.render("index");
});

app.use("/api", studentRouter);

app.use(function(request, response){
	response.status(404).render("404");
});

http.createServer(app).listen(3000, function(){
	console.log("Student app started on port 3000.");
});


