var checkAnswer = document.querySelector("#check-answer");
console.log("Button:", checkAnswer);

var answerInput = document.querySelector("#answerInput");
console.log("Input:", answerInput);

// TODO: query the two number elements
var leftspan = document.querySelector("#lhs");
console.log("Left:", leftspan);

var rightspan = document.querySelector("#rhs");
console.log("Right:", rightspan);
var lhs;
var rhs;

var newProblem = function () {
	lhs = Math.floor(Math.random() * 100);
	rhs = Math.floor(Math.random() * 100);

	leftspan.innerHTML = lhs;
	rightspan.innerHTML = rhs;
};

newProblem();

checkAnswer.onclick = function() {
	if (answerInput.value == lhs+rhs){
		answerInput.value = " "
		newProblem();
		alert("Correct");
	}
	else{
		alert("Wrong");
	}
};
