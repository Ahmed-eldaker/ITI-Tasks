// var input = document.getElementById("input");
// input.addEventListener("oninput", function (e) {
//   if (isNaN(this.value)) {
//     //e.preventDefault();
//     console.log(this.value);
//   }
// });
function validateInput(e) {
  if (isNaN(e.value)) {
    e.value = " ";
    //document.write(`<h1>${e.value}</h1>`);
    console.log(e.value);
  }
  //document.write(`<h1>${e.value}</h1>`);
  console.log(e.value);
}
