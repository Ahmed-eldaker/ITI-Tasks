var tbody = document.getElementById("tbody");
do {
  var w = parseInt(prompt("enter your width"));
} while (isNaN(w));
do {
  var h = parseInt(prompt("enter your height"));
} while (isNaN(h));
var rec = function (w, h) {
  this.width = w;
  this.height = h;
};
// var rec =function(w,h){
//   this.width=w;
//   this.height=h

// };
rec.prototype.area = function () {
  this.area = this.width * this.height;
  return this.area;
};
// rec.prototype.area=function(){
// this.area=this.width*this.height;
// return this.area;
// };
rec.prototype.perimeter = function () {
  this.perimeter = 2 * (this.width + this.height);
  return this.perimeter;
};
// rec.prototype.perimeter = function () {
//   this.perimeter = 2 * (this.width + this.height);
//   return this.perimeter;
// };

rec.prototype.display = function () {
  document.write(`<h2>Width = ${this.width}</h2>`);
  document.write(` <h2>Height = ${this.height}</h2>`);
  document.write(` <h2>Area = ${this.area()}</h2>`);
  document.write(` <h2>Perimeter = ${this.perimeter()}</h2>`);
};
var newRec = new rec(w, h);
newRec.display();

// var newrec=new rec(w,h)
// newrec.display();
