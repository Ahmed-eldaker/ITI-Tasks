var tbody = document.getElementById("tbody");
do {
  var x = parseInt(prompt("enter your width"));
} while (isNaN(x));
do {
  var y = parseInt(prompt("enter your height"));
} while (isNaN(y));

function displayInfo(a, b) {
  var rec = {
    width: a,
    height: b,
    calcArea: function () {
      area = this.width * this.height;
      return area;
    },
    calcPerimeter: function () {
      perimeter = 2 * this.width + 2 * this.height;
      return perimeter;
    },
  };
  return rec;
}

var newRec = new displayInfo(x, y);
tbody.innerHTML = `<h2>Width = ${newRec.width}</h2>
<h2>Height = ${newRec.height}</h2>
<h2>Area = ${newRec.calcArea()}</h2>
<h2>Perimeter = ${newRec.calcPerimeter()}</h2>`;
