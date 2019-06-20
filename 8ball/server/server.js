const express = require("express");
const cors = require("cors");
var server = express();
var port = 8080;
//Middleware
server.use(cors())
// Data
var answers = [
  "yes", "no", "maybe", "are you serious?", "never","perhaps someday", "ofcourse"
];
//REST endpoint
server.get("/", function(req, res){
  res.send("Hello Sharon")
});

//GET /possible_answer
server.get("/answer", function(req, res){
  var random_index = Math.floor(Math.random()*answers.length);
  var random_answer = answers[random_index];
  res.json({
    msg:random_answer
  });
});
server.listen(port, function(){
  console.log(`Listening on port ${port}`);
});
