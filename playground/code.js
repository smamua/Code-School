

var app = new Vue({
  el:"#app",
  data: {
    todo_list:[
      "Mow the Lawn",
      "Clean the house",
      "Take dog on walk"
    ],
    deleted: false,
    task: "",
    },

  methods: {
    deleteTask: function (index) {
      this.todo_list.splice(index, 1);
    },
    addTask: function () {
      this.todo_list.push(this.task);
    },
    editTask: function (){
      this.task
    }
  },
  computed:{

  },

})
