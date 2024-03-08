// var form = document.forms[0];
var inputName = document.getElementById("Name");
var inputEmail = document.getElementById("Email");
var inputAge = document.getElementById("Age");
var tbody = document.getElementById("body");
var addBtn = document.getElementById("Add");
var btnReset = document.getElementById("Reset");
var div = document.getElementsByTagName("div");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var flagName = 0;
var flagAge = 0;
var flagEmail = 0;
var globalAge;
var globalName;
var globalEmail;
/////Check data in input name/////
inputName.addEventListener("keyup", function () {
  var valueName = inputName.value;
  if (
    !isFinite(valueName) &&
    valueName.length > 2 &&
    valueName !== "" &&
    valueName !== null
  ) {
    div[0].classList.add("contentHidden");
    flagName = 0;
    globalName = valueName;
  } else {
    div[0].classList.remove("contentHidden");
    flagName = 1;
  }
});
/////Check data in input age/////
inputAge.addEventListener("keyup", function () {
  var valueAge = parseInt(inputAge.value);
  if (
    !isNaN(valueAge) &&
    valueAge >= 18 &&
    valueAge <= 60 &&
    valueAge !== "" &&
    valueAge != null
  ) {
    div[1].classList.add("contentHidden");
    flagAge = 0;
    globalAge = valueAge;
  } else {
    div[1].classList.remove("contentHidden");
    flagAge = 1;
  }
});
/////Check data in input email/////
inputEmail.addEventListener("keyup", function () {
  var valueEmail = inputEmail.value;
  if (validateEmail(valueEmail) && valueEmail != "" && valueEmail != null) {
    div[2].classList.add("contentHidden");
    flagEmail = 0;

    globalEmail = valueEmail;
  } else {
    div[2].classList.remove("contentHidden");
    flagEmail = 1;
  }
});
function validateEmail(email) {
  return emailRegex.test(email);
}

////display data after check////
//form.addEventListener("click", validation);
addBtn.addEventListener("click", validation);
function validation(e) {
  if (flagEmail == 0 && flagName == 0 && flagAge == 0) {
    // e.preventDefault();
    tbody.innerHTML += `<tr>
     <td>${globalName}</td>
     <td>${globalAge}</td>
     <td>${globalEmail}</td>
     </tr>`;
    resetData();
  } else {
    // e.preventDefault();
  }
}
////reset data from inputs////
btnReset.addEventListener("click", resetData);
function resetData() {
  inputName.value = "";
  inputAge.value = "";
  inputEmail.value = "";
  //document.querySelector(".error").style.visibility = "hidden";
}
