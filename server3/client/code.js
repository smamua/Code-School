
var app = new Vue({
  el:"#app",
  data: {
    greeting: "Hello World",
    names:[ ],
    counter: 0,
    age: 0,
    age_group : "",
    new_name : "",
    numbers: [],
    new_number: 0,
  },
  created: function () {
    this.loadNames();
    this.loadNumbers();
  },
  methods: {
    loadNames: function () {
      fetch("http://localhost:8080/names").then(function(response){
        response.json().then(function(data){
          app.names = data.names;
        })
      })
    },
    loadAgeGroup: function (){
      var req_body = `age=${encodeURIComponent( this.age )}`
      fetch(`http://localhost:8080/age-group?${req_body}`,{
        method: "GET",
        headers:{
          "Content-type": "application/x-www-form-urlencoded"
        }
      }).then(function (response) {
        response.json().then(function(data) {
          app.age_group = data.age_group;
        });
      });
    },
    submitNewName: function () {
      var req_body = {
        name: this.new_name
      };
      fetch("http://localhost:8080/names",{
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(req_body)
      }).then(function (response) {
          if (response.status == 400) {
            response.json().then(function (data) {
              alert(data.msg)
            })
          }
          else if(response.status == 201){
            app.loadNames()
          }
      })
    },
    loadNumbers: function () {
      fetch("http://localhost:8080/numbers").then(function (response) {
        response.json().then(function (data) {
          app.numbers = data.numbers;
        })
      })
    },
    submitNumber: function () {
      var req_body = {
        number: this.new_number
      };
      fetch("http://localhost:8080/numbers",{
        method:"POST",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify(req_body)
      }).then(function () {

      })

    }
  }
})
