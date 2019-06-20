

var app = new Vue({
  el:"#app",
  data: {
    greeting: "Mouse Events, V-Bind, Global Events",
    clicked:false,
    hovering: false,
    position: "left",
    names: [
      "Bob",
      "Jill",
      "Samantha",
    ],
    piece_x : 0,
    piece_y : 0,
    goal_x : 0,
    goal_y :0,
  },
  created: function (){
    window.addEventListener("keydown", this.KeyEvents);//whenever there is a key down we call keyEvents
    this.goal_x = Math.floor(Math.random() *20)* 15;
    this.goal_y = Math.floor(Math.random() *20)* 15;
  },
  methods: {
    click: function () {
      this.clicked = !this.clicked;
    },
    mouseover: function (){
      this.hovering = true;
    },
    KeyEvents: function (e){
      console.log(e.which);
      var ran = Math.floor(Math.random()*this.names.length);
      if(e.which == 39) this.moveRight();
      else if(e.which == 37) this.moveLeft();
      else if(e.which == 38) this.moveUp();
      else if(e.which == 40) this.moveDown()
      else if(e.which == 32) this.names.splice(ran, 1);
    },
    moveUp: function(){
      this.piece_y -= 15;
    },
    moveDown: function () {
      this.piece_y += 15;
    },
    moveRight: function () {
      this.position = "right";
      this.piece_x += 15;

    },
    moveLeft: function (){
      this.position = "left";
      this.piece_x-=15;
    }
  },
  computed:{
    ComputeClass: function () {
      return{
        purple: this.clicked,
        bold:this.hovering,
      }
    },
    positionClass: function (){
      return{
        "text-left": this.position == "left",
        "text-right": this.position == "right",
      }
    },
    pieceStyle: function (){
      return{
        left: this.piece_x + "px",
        top: this.piece_y + "px",
      }
    },
    goalStyle: function () {
      return {
        left: this.goal_x + "px",
        top: this.goal_y + "px",
      };
    },
    victory: function () {
      return this.piece_x == this.goal_x && this.piece_y == this.goal_y;
    }
  }
})
