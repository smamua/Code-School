

var app = new Vue({
  el:"#app",
  data: {
    greeting: "Day 3",
    page: "v-model",
    number1: 0,
    number2: 0,
    people: [
      {
        name:"Bob",
        age: 20,
      },
      {
        name: "Joe",
        age: 30,
      },
      {
        name: "Samantha",
        age:10,
      },
    ],
    image:"horse",
    image_opacity: 1,
    bed_size: "",
    amenities:[],
  },
  methods: {
    becomeLary: function (index) {
      this.people[index].name = "Larry";
    }
  },
    computed: {
      ten: function () {
        return this.number1 + this.number2 == 10;
      },
      no_larrys: function () {
        var larrys = this.people.filter(function (person) {
          return person.name == "Larry";
        });
        return larrys.length == 0;
      },
      some_larrys:function () {

       var larrys = this.people.some(function (person) {
        return person.name == "Larry";
      });
      return larrys;
    },
    all_larrys: function () {
      var larrys = this.people.every(function (person) {
       return person.name == "Larry";
     });
     return larrys;
   },
   imageSource: function () {
     return "images/" + this.image + ".png";
   },
   computedCost: function () {
     var total = 100;
     if (this.bed_size == ""){
       return "Please select a bed size"
     }else {
       if (this.bed_size == "King")total += 30;

       else if (this.bed_size == "Queen")total += 20;

       else total +=10;
       if (this.amenties.includes("Bath")) total += 10;
       if (this.amenties.includes("Porch")) total += 15;
       if (this.amenities.includes("2 Bathrooms")) total += 30;
       if (this.amenities.includes("Gym Access")) total += 10;
       return "$"+ total;
   }
  },

})
