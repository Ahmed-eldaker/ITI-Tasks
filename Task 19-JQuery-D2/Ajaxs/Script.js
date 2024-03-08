$.get("https://jsonplaceholder.typicode.com/users", function (data) {
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    $($(":button")[i]).html(data[i].name);
  }
  $.get("https://jsonplaceholder.typicode.com/posts?userId=1", function (el) {
    for (let x = 0; x < el.length; x++) {
      console.log(el[x].title);
      $(".showData").append(`<div class="showTitle">${el[x].title} </div>`);
    }
  });
});
$("button").click(function () {
  var btnId = $(this).attr("id");
  $.ajax({
    url: `https://jsonplaceholder.typicode.com/posts?userId=${btnId}`,
    method: "get",
    success: function (el) {
      $(".showData").empty();
      for (let x = 0; x < el.length; x++) {
        console.log(el[x].title);
        $(".showData").append(`<div class="showTitle">${el[x].title} </div>`);
      }
    },
  });
});
