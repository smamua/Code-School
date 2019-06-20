

var app = new Vue({
  el:"#app",
  data: {
    greeting: "Hello World!",
    yahtzee_roll : [1, 2, 3,4, 5],
    facts:[
      {
        text:"Is the sku blue?",
        value: true,
      }
    ],
    answer : "",
    start: true,
    page: "start",
    next: false,
    true_false : true,
    correct : 0,
    total : 0,
    roll : 0,
    yahtzee_score : 0
  },
  methods: {
    computed_roll: function (){
      fetch("http://localhost:8080/yahtzee_roll").then(function (response) {
        response.json().then(function (data) {
          app.yahtzee_roll = data.rolls;
          app.roll += 1;

        })
      })
    },
    yahtzee: function () {
      roll += 1;
      var yay = true;
      for (var i = 0; i < this.yahtzee_roll.length - 1; i++) {
        if(this.yahtzee_roll[i] != this.yahtzee_roll[i+1]){
          yay = false
        }
      }
      if (yay) {
        yahtzee_score +=0
      }
    },

  },

  computed:{
    checkAnswer: function(fact){
      this.next = true;
      if (this.answer == fact.value) {
        this.correct += 1;
      }
    },
    nextQuestion: function(){
      this.total += 1;
},


  }
})
