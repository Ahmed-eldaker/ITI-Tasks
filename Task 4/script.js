//--1.1--//

// function sum(x, y) {
//   if (arguments.length !== 2) {
//     throw "Please enter 2 parameters ";
//   }
//   return x + y;
// }
// sum(20, 30);
///////////////////////////////
//--1.2--//
// function test(...values) {
//   //console.log(arguments);
//   var sum = 0;
//   for (var i = 0; i < values.length; i++) {
//     if (typeof values[i] !== "number") {
//       throw `${values[i]} is not a number`;
//     }
//     sum += values[i];
//   }

//   return sum;
// }

// console.log(test(10, 20, 30, 40));
//////////////////////////////////////////
//--1.3--//
// function reverseNumber(...values) {
//   var reverseValues = values.reverse();

//   return reverseValues;
// }
// console.log(reverseNumber(10, 50, 61, 20, 80));
//////////////////////////////////////////
//--1.4--//
// var dateInput = prompt("Please Enter your birth date (DD-MM-YYYY)");
// function validateDate(input) {
//   if (
//     input.length === 10 &&
//     input.charAt(2) === "-" &&
//     input.charAt(5) === "-"
//   ) {
//     var day = parseInt(input.substring(0, 2));
//     var month = parseInt(input.substring(3, 5)) - 1;
//     var year = parseInt(input.substring(6));
//     var date = new Date(day, month, year);
//     alert(date);
//   } else {
//     alert("Invalid Date Format");
//   }
// }
// validateDate(dateInput);
//////////////////////////////////////
//--1.5--//
// var dateInput = prompt("Enter your date");
// var dayNames = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// function validateDate(input) {
//   if (typeof input === "string") {
//     var dateString = new Date(dateInput);
//     var day = dateString.getDay();
//   }

//   alert(dayNames[day]);
// }
// validateDate(dateInput);
