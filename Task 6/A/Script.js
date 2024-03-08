// window.addEventListener("ctrl", function (e) {
//   var t = e.target;
//   console.log(t);
// });
window.addEventListener("keydown", function (e) {
  if (e.ctrlKey) {
    console.log("Ctrl key Pressed");
  } else if (e.altKey) {
    console.log("alt key Pressed");
  } else if (e.shiftKey) {
    console.log("shift key Pressed");
  }
  //   console.log(e.ctrlKey);
  //   console.log(e.altKey);
  //   console.log(e.shiftKey);
});
