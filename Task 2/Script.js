//--1--//
var sum = 0;
do {
  var num = parseInt(prompt("Enter your number"));
  if (num) {
    sum += num;
  } else {
    alert("please enter valid numbers");
  }
} while (sum < 100 && sum > 0);
document.write("sum =", sum);

//--2--//
alert("Welcome to my site!");

var name = prompt("Please enter your name:");

var color = prompt(`Hello ${name}! Choose a color (red, green, or blue):`);

if (color === "red" || color === "green" || color === "blue") {
  document.write(`<h1 style="color: ${color};">welcome  ${name}</h1>`);
} else {
  document.write("choose from the colors");
}
//--3--//
alert("Welcome enter a message to display");
var message = prompt("your message : ");

for (var i = 1; i < 7; i++) {
  document.write(`<h${i}>welcome  ${message}</h${i}>`);
}
