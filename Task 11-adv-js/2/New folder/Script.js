var xhrBands = new XMLHttpRequest();
var Btn = document.getElementById("Btn");
var bandOption = document.getElementById("bandOption");
var singerOption = document.getElementById("singerDiv");
var bandOption = document.getElementById("bandOption");
var option = document.getElementsByName("option");
function getBands() {
  xhrBands.open("get", "rockbands.json");
  xhrBands.send();
}
var gBand;
Btn.addEventListener("click", getBands);
xhrBands.addEventListener("readystatechange", function () {
  if (xhrBands.readyState == 4) {
    if (xhrBands.status == 200) {
      var bands = JSON.parse(xhrBands.response);
      gBand = bands;
      console.log(bands);
      for (var key in bands) {
        bandOption.innerHTML += `<option value="${key}">${key}</option>`;
      }
    }
  }
});

bandOption.addEventListener("change", bandChange);
function bandChange() {}
