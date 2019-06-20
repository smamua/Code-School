const express = require("express");
const cors = require("cors");
var server = express();
var port = 8080;
var data = require("./data.js");
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({
  extended: false
}))
server.get("/names", function (req, res) {
  var response = {
    names: data.names
  }
  res.json(response)
});
server.post("/names", function (req, res) {
  data.names.push(req.body.name);
  res.status(201);
  res.send();
});
server.post("/larry", function (req, res) {
  data.names.push("Larry");
  res.status(201);
  res.send();
});

server.get("/numbers", function(req, res){
  var response = {
    numbers: data.numbers
  }
  res.json(response)
});
server.post("/numbers", function (req, res) {
  if (req.body.number) {
    data.numbers.push(req.body.number)
    res.status(201);
    res.send();
  }
  res.status(400)
  res.json("Write a number")
})
server.get("/user", function(req, res){
  var response = {
    user: data.user
  }
  res.json(response)
})
server.post("/user", function(req, res){
  if (!req.body.user) {
    res.status(400);
    var response = {
      msg: "Write a Username"
}
    res.json(response)
  }
  data.user = req.body.user;
  res.status(201);
  res.send()
});

server.get("/greeting", function (req, res) {
  var response = {
    msg : "hello " + data.user.name
  }
  res.json(response)
})
server.get("/hotcold", function (req, res) {
  var msg = "";
  if (req.body.guess > 100 || req.body.guess < 0) {
    res.status(400);
    msg= "MY number is only between 1-100"
  }
  else{

  if (req.body.guess == data.number) {
    msg = " You guessed it"
  }
  else if (req.body.guess < data.number) {
    msg = "Your guess is too low"
  }else {
    msg = "Your guess is too high"
  }
}
  var response = {
    msg: msg
  }
  res.json(response)
});

server.get("/age-group", function (req, res) {
  var msg = "";
  var num = Number(req.query.age);
  if (num< 0) {
    res.status(400);
    msg = " Enter Valid Age"
  } else {
    if (num < 13) {
      msg = "Kid";
    }
    else if (num < 20) {
      msg = "Teenager"
    }
    else if (num < 45) {
      msg = "Adult"
    }
    else if (num < 65) {
      msg = "Middle Aged"
    }
    else if(num >= 65){
      msg = "Elder"
    }
  }
  var response = {

    "age_group" : msg,
  }
  res.json(response);
});



server.listen(port, function () {

})
