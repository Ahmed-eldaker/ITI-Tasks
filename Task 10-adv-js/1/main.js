function Rectangular(w, h) {
  this.width = w;
  this.height = h;
  Rectangular.count++;
}

Rectangular.count = 0;

Rectangular.prototype.area = function () {
  return this.width * this.height;
};

Rectangular.prototype.parameter = function () {
  return this.height * 2 + this.width * 2;
};

Rectangular.prototype.toString = function () {
  return `width: ${this.width} - hieght: ${
    this.height
  } - area: ${this.area()} - parameter: ${this.parameter()}`;
};

rec = new Rectangular(5, 7);
rec = new Rectangular(5, 8);
console.log(Rectangular.count);
console.log(rec.toString());
//console.log(Rectangular.toString());
