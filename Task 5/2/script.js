var navigation = document.getElementById("navigation");
var container = document.getElementById("container");
var header = document.getElementById("header");
var nav = document.getElementById("nav");

nav.style.marginLeft = "45%";
//navigation.classList.add("center");
container.classList.remove("center");
header.style.paddingLeft = "80%";
var clonedElement = header.cloneNode(true);
clonedElement.id = "cloneElement";
document.body.appendChild(clonedElement);
clonedElement.style.paddingLeft = "0px";
