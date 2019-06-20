const express = require("express");
const cors = require("cors");
var server = express();
var port = 8080;
//Middleware
server.use(cors());
server.use(express.urlencoded({
  extended: false
}))
var items= [
  {
    name: "t-shirt",
    price: 2.99,
    tags:{
      "type": "Clothing", "color": "Black",Sale: true
    },
  },
  {
    name: "dress",
    price: 5.99,
    tags:{
      "type":"Clothing", "color":"Floral", Sale: true
    }
  },
  {
    name: "pants",
    price: 4.99,
    tags:{
      "type":"Clothing", "color":"White", Sale: false
    }
  },
  {
    name: "skirts",
    price: 1.99,
    tags:{
      "type":"Clothing", "color":"blue", Sale: true
    }
  }
]
var numbers =[9, 8, 5, 8, 0, 8];
var filterItems = function (item) {
  var filtered_list = items;
  for (var key in body) {
    filtered_list = items.filter(function (item) {
      if(body[key] == item.tags.key){
        return true
      }else{
        return false;
      }
    })
  }
  return filtered_list
}
server.get("/items", function (req, res){
  var filtered_list = items;
  var filtered_list = filterItems(items, req.body);
  var response = {
    items:filtered_list
  };
  res.json(response);
});
server.get("/numbers", function(req, res){
  if (!numbers) {
    res.status(404);
    var response = {
      msg: "We do not have the list of numbers you asked for"
    };
    res.json(response);
  }
  else{
  var response = {
    numbers: numbers
  };
  res.status(200);
  res.json(response);
}
});
server.get("/numbers/total", function (req, res) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total+=numbers[i];
  }
  res.json({
    total
  });
})
server.get("")
server.get("/numbers/average", function (req, res) {
  var average = 0;
  var total = 0
  for (var i = 0; i < numbers.length; i++) {
    total+=numbers[i];
  }
  average = total/numbers.length;
  res.json({
    average
  });
})
server.listen(port, function(){
  console.log(`Listening on port ${port}`);
});
