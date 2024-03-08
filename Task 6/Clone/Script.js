var originalDiv = document.getElementById("originalDiv");
function getClone() {
  var cloneDiv = originalDiv.cloneNode(true);
  document.body.appendChild(cloneDiv);
  cloneDiv.style.backgroundColor = `#${Math.floor(Math.random() * 256)}`;
}
