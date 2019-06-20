var board = {};
var score = 0;
var getIndex = function (row, column) {
  var index = row * 4 + column;
  var key = "box"  + "-" + index;
  return key;
};
var createBoard = function(){
  var boardDiv = document.querySelector("#board");
  for(var row = 0; row < 16; row++){
      var boxDiv = document.createElement("div");
      boardDiv.appendChild(boxDiv);
      boxDiv.classList.add("box");
      boxDiv.id = "box"  + "-" + row;
  }
};
var updateBoard = function () {
  var scoreSpan = document.querySelector("#score");
  scoreSpan.innerHTML = score;
  for(var row = 0; row < 16; row++){
    var key = "box"  + "-" + row;
    var boxDiv = document.querySelector("#" + key);
    var value = board[key];
    boxDiv.className = "box";
     if (value) {
       boxDiv.innerHTML = value;
       boxDiv.classList.add("tile-" + value);
     } else {
       boxDiv.innerHTML = "";
     }

  }
};
var getEmpty = function () {
  var empty = [];
  for (var row = 0; row < 4; row ++){
    for(var col = 0; col < 4; col++){
      var key = getIndex(row, col);
      var value = board[key];
      if(!value){
        empty.push(key);
      }
    }
}
  return empty;
};
var addTile = function () {
  var emptyTile = getEmpty();
  var index = Math.floor(Math.random() * emptyTile.length);

  var key = emptyTile[index];
  if (!board[key]){
    board[key] = Math.random() > 0.1 ? 2 : 4;
  }
};

var combine = function (inlist) {
  var outlist = [];

  while (inlist.length > 0) {
    if(inlist.length == 0){
      outlist.push(inlist[0]);
      inlist.splice(0,1);
    }
    else if (inlist[0] == inlist[1]){
      var sum = inlist[0] + inlist[1];
      outlist.push(inlist[0] + inlist[1]);
      inlist.splice(0,2);
      score += sum;
    }
    else{
      outlist.push(inlist[0]);
      inlist.splice(0,1);
    }
  }
  while(outlist.length < 4){
    outlist.push(undefined);
  }
  return outlist;
};

var combineDirection = function (direction){
  var oldboard = Object.assign({}, board);
  for ( var n = 0; n < 4; n ++){
    if (direction == "left") {
      var nums = getRow(n);
      var newNums = combine(nums);
      setRow(n, newNums);
    }
    else if (direction == "right"){
      var nums = getRow(n);
      nums = nums.reverse();
      var newNums = combine(nums);
      newNums.reverse();
      setRow(n, newNums);
    }
    else if (direction == "up"){
      var nums = getCol(n);
      var newNums = combine(nums);
      setCol(n, newNums);
    }
    else if(direction == "down"){
      var nums = getCol(n);
      nums = nums.reverse();
      var newNums = combine(nums);
      newNums.reverse();
      setCol(n, newNums);
    }
  }
  if(didboardChange(oldboard)){
    addTile();
    updateBoard();
  }
};
var didboardChange = function (oldboard){
  for (var row = 0; row < 4; row ++){
    for(var col = 0; col < 4; col++){
      var key = getIndex(row, col);
      if(board[key] != oldboard[key]){
        return true
      }
    }
  }
  return false;
};

var getRow = function (row) {
  var rowlist = [];
  for(var col = 0; col < 4; col++){
    var key = getIndex(row, col);
    var value = board[key];
    if (value) {
      rowlist.push(value);
    }
  }
  return rowlist;
};
var getCol = function (col){
  var collist = [];
  for(var row = 0; row < 4; row++){
    var key = getIndex(row, col);
    var value = board[key];
    if (value) {
      collist.push(value);
    }
  }
  return collist;
};
var setRow = function (row, rowlist) {
  for(var col = 0; col < 4; col++){
    var key = getIndex(row, col);
    board[key] = rowlist[col];
  }
};
var setCol = function (col, collist){
  for(var row = 0; row < 4; row++){
    var key = getIndex(row, col);
    board[key] = collist[row];
  }
};
document.onkeydown = function(d){
  //console.log(d)
  if(d.which == 37){
    combineDirection("left");
  }
  if(d.which == 39){
    combineDirection("right");
  }

  if (d.which ==38){
    combineDirection("up");
  }
  if (d.which == 40){
    combineDirection("down");
  }
};

var getHighscores = function () {
  fetch("https://highscoreapi.herokuapp.com/scores").then(function (response) {
    response.json().then(function (scores) {
      var list = document.querySelector("#high-scores");
      list.innerHTML = "";
      scores.forEach(function (score) {
        var item = document.createElement("li");

        item.innerHTML = score.name + ": " + score.score;
        list.appendChild(item);
      });
    });
  });
};
var submitScore = function (){
  var initials = prompt("Enter initials:")
  fetch("https://highscoreapi.herokuapp.com/scores", {
    method: "POST",
    body: JSON.stringify({
      score: score,
      name: initials
    }),
    headers: {
      "Content-type": "application/json"
    }
  });

};
var newgame = function(){
  board = {};
  score = 0;
  addTile();
  addTile();
  updateBoard();
};
var start = document.querySelector(".btn");
start.onclick = function () {
  newgame();
}
var getScores = document.querySelector("#get-scores");
getScores.onclick = function () {
  getHighscores();
}
var submitButton = document.querySelector("#submit-score");
submitButton.onclick = function () {
  submitScore();
}
createBoard();
newgame();
