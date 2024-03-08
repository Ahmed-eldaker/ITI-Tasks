var inputNum = document.getElementById("inputPassword");
var hidden = document.getElementById("hidden");
var show = document.getElementById("show");
hidden.addEventListener("click", function () {
  hidden.style.display = "none";
  show.style.display = "inline";
  inputNum.setAttribute("type", "password");
});
show.addEventListener("click", function () {
  hidden.style.display = "inline";
  show.style.display = "none";
  inputNum.setAttribute("type", "text");
});
