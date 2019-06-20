var data ={
  greeting: "Hello", stoplight_color: "RED",
};
setInterval(function () {
  if (data.stoplight_color == "RED") {
    data.stoplight_color = "GREEN";
  } else if (data.stoplight_color == "GREEN") {
    data.stoplight_color = "YELLOW";
  }else {
    data.stoplight_color == "RED";
  }
}, 1000);


module.exports = data
