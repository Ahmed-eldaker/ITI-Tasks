function* fibonacciCounter(count) {
  let a = 0,
    b = 1;
  for (let i = 0; i < count; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}
for (let value of fibonacciCounter(5)) {
  console.log(value);
}
console.log(...fibonacciCounter(6));
console.log("-------------------------");
function* fibonacciMaxValue(maxValue) {
  let a = 0,
    b = 1;
  while (a <= maxValue) {
    yield a;
    [a, b] = [b, a + b];
  }
}
for (let value of fibonacciMaxValue(10)) {
  console.log(value);
}
console.log(...fibonacciMaxValue(20));
