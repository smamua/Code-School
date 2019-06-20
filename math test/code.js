

var app = new Vue({
  el:"#app",
  data: {
      problem_number : 1,
      lhs : 5,
      rhs : 4,
      answer : "??",
      guess: "",
      correct : 0,
      number_of_questions : 0,
      feedback : "",
      submitted: false,
      page: "test",
  },
  methods: {
      checkanswer: function () {
        if (this.guess ==  ""){
          this.feedback = "write a number";
        }
        else if (this.guess == (this.lhs + this.rhs)) {
          guess: "",
          this.answer = this.lhs + this.rhs;
          this.feedback = "Correct";
          this.number_of_questions += 1;
          this.correct += 1;
        }
        else{
          guess: "",
          this.answer = this.lhs + this.rhs;
          this.feedback ="Wrong"
        }
        this.submitted = true;
      },
      nextQuestion: function () {
        this.submitted = false;
        this.problem_number += 1;
        this.answer = "??";
        this.feedback = "";
        this.guess = "";
        this.lhs = Math.floor(Math.random() * 10);
        this.rhs = Math.floor(Math.random() * 10);
      }
  },
})
