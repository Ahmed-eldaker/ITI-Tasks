var response = fetch("https://jsonplaceholder.typicode.com/users");
response
  .then(function (data) {
    return data.json();
  })
  .then(function (users) {
    for (let i = 0; i < users.length; i++) {
      $($(":button")[i]).html(users[i].name);
    }
    var p = fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
    p.then(function (data) {
      return data.json(); // return promise
    })
      .then(function (users) {
        for (let x = 0; x < users.length; x++) {
          console.log(users[x].title);
          $(".showData").append(
            `<div class="showTitle">${users[x].title} </div>`
          );
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  })
  .catch(function (err) {
    console.log(err);
  });
$("button").click(async function () {
  var btnId = $(this).attr("id");
  var response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${btnId}`
  );
  var data = await response.json();
  $(".showData").empty();
  for (let x = 0; x < data.length; x++) {
    console.log(data[x].title);
    $(".showData").append(`<div class="showTitle">${data[x].title} </div>`);
  }
});

// $("button").click(function () {
//   var btnId = $(this).attr("id");
//   $.ajax({
//     url: `https://jsonplaceholder.typicode.com/posts?userId=${btnId}`,
//     method: "get",
//     success: function (el) {
//       $(".showData").empty();
//       for (let x = 0; x < el.length; x++) {
//         console.log(el[x].title);
//         $(".showData").append(`<div class="showTitle">${el[x].title} </div>`);
//       }
//     },
//   });
// });
