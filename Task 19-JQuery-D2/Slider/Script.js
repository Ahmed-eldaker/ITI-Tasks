$(".imgDiv").click(function () {
  $(".layer").css({ display: "flex" });
  $(".img5").css({ "background-image": $(this).css("background-image") });
});
const images = ["imgs/1.jpeg", "imgs/2.jpeg", "imgs/3.jpeg"];
var currentIndex = 0;
$(".right").click(function () {
  if (currentIndex != 3) {
    $(".img5").css({ "background-image": `url(${images[currentIndex]})` });
    currentIndex++;
  } else {
    currentIndex = 0;

    $(".img5").css({ "background-image": `url(${images[currentIndex]})` });
  }
});
$(".left").click(function () {
  if (currentIndex != 0) {
    $(".img5").css({ "background-image": `url(${images[currentIndex]})` });
    currentIndex--;
  } else {
    currentIndex = 2;
    $(".img5").css({ "background-image": `url(${images[currentIndex]})` });
  }
});
$(".layer").click(function (e) {
  if (!$(e.target).hasClass("imgDiv") && !$(e.target).hasClass("icon")) {
    $(this).css({ display: "none" });
  }
});
