//////////////1///////////
let [x, y] = [10, 20];
console.log(x, y);
//////////2//////////////
let arr1 = [10, 30, 20, 12, 52, 40];
let arr2 = [30, 40, 60, 7];
function findMaxMin(...values) {
  let minValue = Math.min(...values);
  let maxValue = Math.max(...values);
  return { minValue, maxValue };
}
console.log(findMaxMin(...arr1));
console.log(findMaxMin(...arr2));
//////////3//////////////
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
var f = fruits.map((el) => typeof el == "string");
console.log(f);
///////
var s = fruits.some((el) => el.startsWith("a"));
console.log(s);
//////
var filterArr = fruits.filter((el) => el.startsWith("s") || el.startsWith("b"));
console.log(filterArr);
//////
var iLike = fruits.map((el) => `i like  ${el}`);
console.log(iLike);
/////
iLike.forEach((el) => console.log(el));
