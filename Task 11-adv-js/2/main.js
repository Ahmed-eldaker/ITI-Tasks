var select = document.getElementById("bands");
var select2 = document.getElementById("artists");
var div2 = document.getElementsByClassName("art")[0];
var xhrBands = new XMLHttpRequest();

xhrBands.open("get", "./rockbands.json");
xhrBands.send();
xhrBands.addEventListener("readystatechange", handelRequest);
var res;

function handelRequest() {
  if (xhrBands.readyState === 4) {
    if (xhrBands.status === 200) {
      res = JSON.parse(xhrBands.response);
      for (var key in res) {
        var opt = document.createElement("option");
        opt.innerText = key;
        opt.value = key;
        select.append(opt);
      }
    }
  }
}

select.addEventListener("change", function () {
  if (select2.children.length > 1) {
    var empty = Array.from(select2.children).slice(1);
    empty.forEach((child) => select2.removeChild(child));
  }
  for (var key in res) {
    if (select.value === key) {
      for (var i = 0; i < res[key].length; i++) {
        var opt = document.createElement("option");
        opt.innerText = res[key][i].name;
        opt.value = res[key][i].name;
        artists.append(opt);
      }
    }
  }
});

select2.addEventListener("change", function () {
  for (var key in res) {
    if (select.value === key) {
      for (var i = 0; i < res[key].length; i++) {
        if (select2.value === res[key][i].name) {
          var myURL = res[key][i].value;
          window.open(myURL);
        }
      }
    }
  }
});
