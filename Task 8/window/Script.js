var childWindow;
var openBtn = document.getElementById("open");
var closeBtn = document.getElementById("close");
openBtn.addEventListener("click", function () {
  childWindow = window.open(
    "page2.html",
    "",
    "left=100,top=100,width=320,height=320"
  );
  setTimeout(function () {
    childWindow.close();
  }, 5000);
});
closeBtn.addEventListener("click", function () {
  if (childWindow) {
    childWindow.close();
  }
});
