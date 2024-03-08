var obj = {
  name: "ahmed",
  age: 25,
  address: "abasEla2ad St",
};
handler = {
  get: function (target, prop, roxy) {
    console.log(arguments);
    if (!(prop in target)) {
      throw `this ${prop} is not found`;
    }
    return target[prop];
  },
  set: function (target, prop, val, proxy) {
    switch (prop) {
      case "name":
        // console.log("1");
        if (val.length > 7 || typeof val !== "string") {
          throw "name accepts only string of 7 characters";
        }
        target[prop] = val;
        break;
      case "address":
        // console.log("2");
        if (typeof val !== "string") {
          throw "address accepts only string value";
        }
        target[prop] = val;
        break;
      case "age":
        // console.log("3");
        if (val < 25 || val > 60 || typeof val !== "number") {
          throw "value must be number between 25 and 60";
        }
        target[prop] = val;
        break;

      default:
        console.log(`this ${prop} not found`);
        break;
    }
  },
};
var newObj = new Proxy(obj, handler);
console.log(newObj.name); // ahmed
console.log((newObj.name = "khaled")); // [get] arguments: ["name"]
