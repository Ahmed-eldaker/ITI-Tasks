function Shape(w, h) {
  if (this.constructor == Shape) {
    throw "Instance of static class Shape is denied";
  }
  this.width = w;
  this.height = h;
}
Shape.prototype.area = function () {
  return this.height * this.width;
};
Shape.prototype.parameter = function () {
  return this.height * 2 + this.width * 2;
};

function Rectangular(w, h) {
  if (Rectangular.count > 0) {
    throw "Only one instance is allowed from Rectangular instructor";
  }
  Shape.call(this, w, h);
  if (this.constructor == Rectangular) {
    Rectangular.count++;
    console.log(Rectangular.count);
  }
}
Rectangular.count = 0;
Rectangular.prototype = Object.create(Shape.prototype);
Rectangular.prototype.constructor = Rectangular;
rec = new Rectangular(2, 4);
console.log(rec);

function Sqaure(l) {
  if (Sqaure.count > 0) {
    throw "Only one instance is allowed from Sqaure instructor";
  }
  Rectangular.call(this, l, l);
  if (this.constructor == Sqaure) {
    Sqaure.count++;
  }
}
Sqaure.prototype = Object.create(Rectangular.prototype);
Sqaure.prototype.constructor = Sqaure;
Sqaure.count = 0;
sqr = new Sqaure(4);
console.log(sqr);
console.log(sqr.area());
