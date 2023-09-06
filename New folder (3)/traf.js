var red = document.getElementById("red");
var green = document.getElementById("green");
var yello = document.getElementById("yellw");
setInterval(() => {
  if (red.style.backgroundColor === "red") {
    yello.style.backgroundColor = "yellow";
    green.style.backgroundColor = "rgb(49, 49, 25)";
    red.style.backgroundColor = "rgb(49, 49, 25)";
  } else if (yello.style.backgroundColor == "yellow") {
    yello.style.backgroundColor = "rgb(49, 49, 25)";
    green.style.backgroundColor = "green";
    red.style.backgroundColor = "rgb(49, 49, 25)";
  } else {
    red.style.backgroundColor = "red";
    yello.style.backgroundColor = "rgb(49, 49, 25)";
    green.style.backgroundColor = "rgb(49, 49, 25)";
  }
}, 3000);
