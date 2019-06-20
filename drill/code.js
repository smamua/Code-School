

var app = new Vue({
  el:"#app",
  data: {
    greeting: "Checkout: Skateboard",
    imagedeck: "basswood",
    imagewheels: "white",
    imagedesign: 1,
    deck : "",
    color: "",
    design: "",
  },
  methods: {

  },
  computed: {
    imageWheels: function () {
     return "images/" + this.imagewheels + ".jpg";
     },
     imageDeck: function () {
      return "images/" + this.imagedeck+ ".jpg";
    },
    imageDesign: function () {
     return "images/" + this.imagedesign + ".jpg";
   },
   cost:  function () {
     var cost = 0;
     return "$" + cost;
   },
   tax: function () {
     var tax = 0;
     tax = this.cost * 0.03;
     return "$"+tax;
   }
 },

})
