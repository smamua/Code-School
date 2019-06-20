var tiles = document.querySelectorAll(".box");
var turn = document.querySelector(".turn");
console.log("Tiles", tiles);
var counter = 0;

var checkWinnerInGroup = function(selector, player){
  var count = 0;
  var group = document.querySelectorAll(selector);

  group.forEach(function(tile){
    if(tile.innerHTML == player){
      count += 1;
    }
  });
  if(count == 3){
    return true;
  }
  else{
    return false;
  }
};
var checkWinner = function(player){
  var row1 = checkWinnerInGroup(".row1", player);
  var row2 =checkWinnerInGroup(".row2", player);
  var row3 =checkWinnerInGroup(".row3", player);
  var col1 =checkWinnerInGroup(".col1", player);
  var col2 =checkWinnerInGroup(".col2", player);
  var col3 =checkWinnerInGroup(".col3", player);
  var diag1 =checkWinnerInGroup(".diag1", player);
  var diag2= checkWinnerInGroup(".diag2", player);
  if(row1 || row2 || row3 || col1 || col2 || col3 || diag1 || diag2){
    alert("Winner: " + player);
    document.location.reload();
  }
  else if (counter == 9) {
    alert("Cat");

  }

}
var currentPlayer = 1;
turn.style.color = "#f45";


tiles.forEach(function(tile){
  tile.onclick = function(){
    if(tile.innerHTML == ""){
      counter += 1;
      if(currentPlayer == 1){
        tile.innerHTML = "X";
        tile.style.color = "#f45";
        tile.style.backgroundColor = "#a23";
        checkWinner("X");
        currentPlayer = 2;
        turn.style.color = "#5af";
        turn.innerHTML ="O";
      }
      else{
        tile.style.color = "#5af";

        tile.style.backgroundColor = "#39e";
        tile.innerHTML = "O";
        checkWinner("O");
        turn.innerHTML ="Player1";
        turn.style.color = "#f45";
        currentPlayer = 1;
        turn.innerHTML ="X";
      }
  }
  else{
    alert("Stealing is bad");
  }
  };
});
