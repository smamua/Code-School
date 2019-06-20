

var app = new Vue({
  el:"#app",
  data: {
    greeting: "Hello World!",
    name: "Sharon",
    job: "Developer",
    what_im_typing: "",
  },
  methods: {
    changeName: function (new_name) {
      this.name = new_name;

    }
  }
})
