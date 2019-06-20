const express = require("express");
const cors = require("cors");
var server = express();
var port = 8080;
//Middleware
var computed_roll = [];

server.use(cors());
server.use(express.urlencoded({
  extended: false
}))
server.get("/yahtzee_roll", function (req, res) {
  computed_roll = []
  for (var i = 0; i < 5; i++) {
    var random = Math.floor(Math.random()*5) + 1;
    computed_roll.push(random);
  }
  var response ={
    rolls: computed_roll,
}
  res.json(response)
})


server.listen(port, function(){
  console.log(`Listening on port ${port}`);
});
