var obj = {
  name: "ahmed",
  address: "zagazig",
  age: 25,
  [Symbol.iterator]: objIterator,
};
var res = obj[Symbol.iterator]();
function objIterator() {
  var keys = Object.keys(this);
  var counter = -1;
  return {
    next: () => {
      counter++;
      if (counter < keys.length) {
        return {
          value: [keys[counter], this[keys[counter]]],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
}
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
