var search = location.search;
var dataSplit = search.split("&");
var addressSplit = dataSplit[0];
var genderSplit = dataSplit[1];
var emailSplit = dataSplit[2];
var mobileSplit = dataSplit[3];
var address = addressSplit.split("=")[1];
var gender = genderSplit.split("=")[1];
var email = emailSplit.split("=")[1];
var mobile = mobileSplit.split("=")[1];
var submitBtn = document.getElementById("submit");
//console.log(address, gender, email, mobile);
submitBtn.addEventListener("click", function () {
  window.location.replace("hello.html");
  //window.location.assign("hello.html");
  //window.location.href = "hello.html";

  //window.open("hello.html");
});

// function submitBtn() {
//   document.location.replace("hello.html");
// }
// window.location.assign("/Lab-8/location/hello.html");
// document.addEventListener("DOMContentLoaded", function () {
//   var dataView = document.getElementById("dataView");
//   dataView.innerHTML = `<h2>Address = ${address}</h2>
// <h2>Gender = ${gender}</h2>
// <h2>Email = ${email}</h2>
// <h2>Mobile = ${mobile}</h2>`;
//   console.log("Address:", address);
//   console.log("Gender:", gender);
//   console.log("Email:", email);
//   console.log("Mobile:", mobile);
// });

// setTimeout(setOff, 3000);
// function setOff() {
//   if (address === "" && email === "" && mobile === "" && gender === "") {
//   }
// }

if (address == "" && email == "" && mobile == "" && gender == "") {
  setTimeout(alertFunc, 300);
}

function alertFunc() {
  alert("Hello!");
}
