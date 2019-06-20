
var app = new Vue({
  el:"#app",
  data: {
      question:"",
      feedback:"Waiting for a question...",
      answer: "8",
  },
  methods: {
      checkQuestion: function () {
        if(this.question == ""){
          this.feedback = "Waiting for a question";
        }
        else if (this.question[this.question.length - 1] != "?") {
          this.feedback ="Questions need '?'";
        }
        else {
          this.feedback = "Ready to give an answer"
        }
      },
      askQuestion: function () {/*
        possible_answer = ["yes", "no", "maybe", "perhaps someday", "ofcourse"];
        var index = Math.floor(Math.random()*possible_answer.length);
        this.answer = possible_answer[index];
        */
        fetch("http://localhost:8080/answer").then(function (response) {
          response.json().then(function (answer) {
            console.log(answer);
            app.answer = answer.msg;
            app.question = "";
            app.feedback="Waiting for a question...";

          })
        })
      }
  },
})
