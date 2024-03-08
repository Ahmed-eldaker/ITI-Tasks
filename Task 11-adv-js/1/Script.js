var xhrPosts = new XMLHttpRequest();
function getPost() {
  xhrPosts.open("get", "https://jsonplaceholder.typicode.com/posts");
  xhrPosts.send();
}
var btn = document.getElementById("publishPost");
var div = document.getElementById("bodyPost");
btn.addEventListener("click", getPost);
xhrPosts.addEventListener("readystatechange", function () {
  if (xhrPosts.readyState == 4) {
    if (xhrPosts.status == 200) {
      var posts = JSON.parse(xhrPosts.response);
      console.log(posts);
      posts.forEach(function (e) {
        div.innerHTML += `<p>${e.id}  ${e.body}  ${e.title} </p>`;
      });
    }
  }
});
