function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

const range1 = range(0, 10, 3);
const range2 = range(0, 10, 2);

console.log(range1.next());
console.log(range1.next());
console.log(range1.next());
console.log(range1.next());
console.log(range1.next());

for (const iterator of range2) {
  console.log(iterator);
}

console.log([...range(0, 10, 1), 15]);
