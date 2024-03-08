function Employee(id, name) {
  this.id = id;
  this.name = name;
}
Employee.prototype.display = function () {
  console.log("done");
};
Employee.prototype.getSetGen = function () {
  for (var key in this) {
    console.log(key);
    if (typeof this[key] !== "function") {
      console.log(this);
      var self = this;
      n = this[key];
      (function () {
        Object.defineProperty(self, key, {
          get: function () {
            return n;
          },
          set: function (value) {
            n = value;
          },
        });
      })();
    }
  }
};

var emp = new Employee(3, "ali");
//console.log(emp);
//emp.getSetGen();
// console.log(emp);
console.log(emp.name);
