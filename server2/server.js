const express = require("express");
const cors = require("cors");
var server = express();
var port = 8080;
//Middleware
server.use(cors())
server.use(express.urlencoded({
  extended: false
}));
server.use(express.json())

//data
var data = require("./data.js");
console.log(data);
var numbers = [3, 4, 1, 0, 9, 5];

var movies_all = [
  "Pulp Fiction",
  "What about Bob?",
  "Once Upon a Time in Hollywood"
];
var movies_kids =[
  "Lion King",
  "Wreck-it-Ralph",
  "Pokemon",
  "Tarzan"
];
var movies_adults =[
  "Kill Bill",
  "Avengers",
  "Hateful Eight",
];
var movies_elderly = [
  "Shootist",
  "James Bond",
  "Terminator"
];



server.get("/numbers", function(req, res){
  var response ={
    numbers,
  }
  res.json(response);
})
server.get("/movie-night", function (req, res) {
  console.log(req.body)
  var selected_movies = movies_all;
    if (req.body.age <= 10) {
      selected_movies = selected_movies.concat(movies_kids);
    }
    else if (req.body.age <= 50) {
      selected_movies = selected_movies.concat(movies_adults);
    }
    else if (req.body.age > 50) {
      selected_movies = selected_movies.concat(movies_elderly);
    }
  var random = Math.floor(Math.random() * selected_movies.length);
  var response = {
    movie: selected_movies[random]
  }
  res.json(response)

})
server.get("/numbers/min", function(req, res){
  var min = numbers[0]
  numbers.forEach(function (number) {
    if (number < min) {
      min = number
    }
  })
  var response ={
    min,
  };
  res.json(min);
});
server.get("/numbers/go-fish", function(req, res){
  console.log(req.body);
  var go_fish = numbers.includes(Number(req.body.number))
  console.log(go_fish);
  res.send( );
})
server.get("/stoplight", function (req, res) {
  var response = {color: data.stoplight_color}
  res.json(response)
})
server.listen(port, function(){
  console.log(`Listening on port ${port}`);
});
