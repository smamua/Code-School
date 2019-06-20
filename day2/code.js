

var app = new Vue({
  el:"#app",
  data: {
    greeting:"Welcome to day2 of Vue",
    seen: true,
    page: "one",
    number1: Math.floor(Math.random()*10),
    number2: Math.floor(Math.random()*10),
    topics:[
      "v-if",
      "v-else-if",
      "v-else",
      "computer",
      "v-for",
      "etc",
    ],
    students:[
      {
        name:"Bob",
        age:20,
      },
      {
        name: "Carl",
        age:25,
      },
      {
        name: "Timmy",
        age: 26,
      },
      {
        name: "Samantha",
        age: 30,
      }
    ],
    urgent: true,
    important: true
  },
  methods: {
    FlipThePage: function () {
      if (this.page == "one") {
        this.page = "two";
      }else if (this.page == "two") {
        this,page = "three";
      }else {
        this.page = "one";
      }
    }
  },
    computed: {
      answer: function () {
        return this.number1 + this.number2;
      }
    }

})
