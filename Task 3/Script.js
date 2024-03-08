//--1.1--//

// var Word = prompt("Enter your word");
// function checkPalindrome(str) {
//   return str == str.split("").reverse().join("");
// }
// function checkPalindromeCp(str) {
//   var str = str.replace(/[^a-zA-Z0-9]+/gi, "").toLowerCase();
//   return str == str.split("").reverse().join("");
// }
// var message = confirm("case sensitive?");
// if (!message) {
//   if (checkPalindromeCp(Word)) {
//     document.writeln("your word is palindrome ");
//   } else {
//     document.writeln("your word is not palindrome ");
//   }
// } else {
//   if (checkPalindrome(Word)) {
//     document.writeln("your word is palindrome ");
//   } else {
//     document.writeln("your word is not palindrome ");
//   }
// }

//--1.2--//

// var Input = prompt("Enter a string:");
// var count = 0;
// for (var i = 0; i < Input.length; i++) {
//   if (Input.charAt(i) === "e") {
//     count++;
//   }
// }
// document.writeln(count);

//--1.3--//

var Name = prompt("Enter your name:");
var PhoneNumber = prompt("Enter your PhoneNumber:");
var Email = prompt("Enter your email:");

var nameRegex = /^[A-Za-z\s]+$/;
var phoneNumberPattern = /^(011|012|010|015)\d{8}$/;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (
  nameRegex.test(Name) &&
  phoneNumberPattern.test(PhoneNumber) &&
  emailRegex.test(Email)
) {
  alert(
    "Welcome, " +
      Name +
      "! \n" +
      "PhoneNumber: " +
      PhoneNumber +
      "\n" +
      "Email: " +
      Email
  );
} else {
  alert("Please provide valid information for all fields.");
}

//------------//
//--2.1--//

// do {
//   var radius = parseFloat(prompt("Enter circle`s radius"));
// } while (isNaN(radius) || radius <= 0);
// var area = Math.PI * Math.pow(radius, 2);
// document.write(`<h1>area of the circle =  ${area}<h1>`);

//--2.2--//

// do {
//   var value = parseFloat(
//     prompt("what is the value you want to calculate its square root")
//   );
// } while (isNaN(value));
// var root = Math.sqrt(value);
// alert(`square root of ${value} =  ${root}`);

//
//
//
//--3.1--//

// var array = new Array(3);
// do {
//   var a = parseFloat(prompt("Enter first element of the array"));
//   var b = parseFloat(prompt("Enter second element of the array"));
//   var c = parseFloat(prompt("Enter third element of the array"));
// } while (isNaN(a) || isNaN(b) || isNaN(c));
// array[0] = a;
// array[1] = b;
// array[2] = c;
// var operation = parseInt(
//   prompt(`enter your mathematical operation
//           adding       choose 1
//           multiplying  choose 2
//           dividing     choose 3`)
// );
// switch (operation) {
//   case 1:
//     var sum = array[0] + array[1] + array[2];
//     alert(`sum= ${sum}`);
//     break;
//   case 2:
//     var multiply = array[0] * array[1] * array[2];
//     alert(`multiplying = ${multiply}`);
//     break;
//   case 3:
//     if (array[0] == 0 || array[1] == 0 || array[2] == 0) {
//       alert("can't divide by zero");
//     } else {
//       var division = array[0] / array[1] / array[2];
//       alert(`division = ${division}`);
//     }
//     break;
//   default:
//     alert("please choose valid operation");
//     break;
// }

//
//
//
//--3.2--//

// var array = new Array(5);
// do {
//   var a = parseFloat(prompt("Enter first element of the array"));
//   var b = parseFloat(prompt("Enter second element of the array"));
//   var c = parseFloat(prompt("Enter third element of the array"));
//   var d = parseFloat(prompt("Enter fourth element of the array"));
//   var e = parseFloat(prompt("Enter fifth element of the array"));
// } while (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e));

// array[0] = a;
// array[1] = b;
// array[2] = c;
// array[3] = d;
// array[4] = e;
// document.writeln(`u have entered the values of ${array} </br>`);

// var srtASC = array.sort(function (a, b) {
//   return a - b;
// });
// document.writeln(`u have entered the values of ${srtASC} </br>`);
// var srtDES = array.sort(function (a, b) {
//   return b - a;
// });
// document.writeln(`u have entered the values of ${srtDES} </br>`);
