// $("h2").click(function () {
//   $("h2").not($(this).next()).slideUp(500);
//   //   $(this).next().slideToggle(500);
// });
// $(document).ready(function () {
// console.log("hello");
$(".tab").click(function () {
  // console.log("hi");
  $(".tab").css({
    "border-top": "0px solid #588a96",
    "background-color": "#d0dcdf",
  });
  $(this).css({
    "border-top": "3px solid #588a96",
    "background-color": "#97a1a3",
  });

  //var tab_id = $(this).attr("id");
  var tabIndex = $(this).data("tab-index");
  // $(".Content").animate({ display: "none" }, 50);

  $(".Content").css({ display: "none" });
  $(".Content").css({ display: "none" });
  $('.Content[data-content-index="' + tabIndex + '"]').css({
    display: "block",
  });
});
// });
// $("#sliderDown .toggle").click(function () {
//     $(".inner").not($(this).next()).slideUp(500);
//     $(this).next().slideToggle(500);
// });
