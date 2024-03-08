var marbles = document.getElementsByTagName("img");
var div = document.getElementById("div");
var i = 0;
var interTime = setInterval(change, 500);

function change() {
  if (i == 0) {
    marbles[i].src = "./marbles/marble2.jpg";
    marbles[5].src = "./marbles/marble1.jpg";
    i++;
  } else if (i == 1) {
    marbles[i].src = "./marbles/marble2.jpg";
    marbles[i - 1].src = "./marbles/marble1.jpg";
    i++;
  } else if (i == 2) {
    marbles[i].src = "./marbles/marble2.jpg";
    marbles[i - 1].src = "./marbles/marble1.jpg";
    i++;
  } else if (i == 3) {
    marbles[i].src = "./marbles/marble2.jpg";
    marbles[i - 1].src = "./marbles/marble1.jpg";
    i++;
  } else if (i == 4) {
    marbles[i].src = "./marbles/marble2.jpg";
    marbles[i - 1].src = "./marbles/marble1.jpg";
    i++;
  } else if (i == 5) {
    i = 0;
    marbles[4].src = "./marbles/marble1.jpg";

    marbles[5].src = "./marbles/marble2.jpg";
  }
}
div.addEventListener("load", function () {
  interTime;
});
function stop() {
  clearInterval(interTime);
  interTime = null;
}
div.addEventListener("mouseover", stop);
div.addEventListener("mouseout", function () {
  interTime = setInterval(change, 400);
});
