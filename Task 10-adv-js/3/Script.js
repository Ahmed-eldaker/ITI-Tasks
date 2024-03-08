// function Book(name, type) {
//   this.name = name;
//   this.type = type;
// }

// function Box(height, width, length, material) {
//   this.height = height;
//   this.width = width;
//   this.length = length;
//   this.numOfBooks = 0;
//   this.volume = height * width * length;
//   this.material = material;
//   this.content = [];

//   this.addBook = function (book) {
//     this.content.push(book);
//     this.numOfBooks++;
//   };

//   this.removeBookByName = function (bookName) {
//     this.content = this.content.filter((book) => book.name !== bookName);
//     this.numOfBooks = this.content.length;
//   };

//   this.removeBookByType = function (bookType) {
//     this.content = this.content.filter((book) => book.type !== bookType);
//     this.numOfBooks = this.content.length;
//   };

//   this.toString = function () {
//     return `Box Dimensions: ${this.height}x${this.width}x${
//       this.length
//     }\nMaterial: ${this.material}\nNumber of Books: ${
//       this.numOfBooks
//     }\nContent: ${JSON.stringify(this.content)}`;
//   };

//   this.valueOf = function () {
//     return this.numOfBooks;
//   };
// }

// // Example usage:

// const box1 = new Box(10, 8, 5, "Cardboard");
// const box2 = new Box(12, 6, 4, "Wood");

// const book1 = new Book("Book1", "Fiction");
// const book2 = new Book("Book2", "Non-Fiction");
// const book3 = new Book("Book3", "Fiction");

// box1.addBook(book1);
// box1.addBook(book2);

// box2.addBook(book3);

// console.log(box1.toString());
// console.log(box2.toString());

// box1.removeBookByName("Book1");

// console.log(box1.toString());

// const totalBooks = box1 + box2;
// console.log(`Total books in all boxes: ${totalBooks}`);
function Box(h, w, l, m, c) {
  this.height = h;
  this.width = w;
  this.length = l;
  this.volume = h * w * l;
  this.material = m;
  this.content = c;
}

Box.prototype.numOfBooks = function () {
  return this.content.length;
};

Box.prototype.deleteBook = function (title) {
  for (var i = 0; i < this.content.length; i++) {
    if (this.content[i].title === title) {
      this.content = this.content.splice(i, 1);
    }
  }
};

Box.prototype.toString = function () {
  return this.height * this.length * this.width;
};

Box.valueOf = function () {
  var value = 0;
  for (var i = 0; i < arguments.length; i++) {
    value += arguments[i].numOfBooks();
  }
  return value;
};

function Book(title, chapters, author, pages, puplisher, copies) {
  this.title = title;
  this.numOfChapters = chapters;
  this.author = author;
  this.numOfPages = pages;
  this.puplisher = puplisher;
  this.numOfCopies = copies;
}

var boxContent1 = [];
var box1 = new Box(3, 4, 6, "wood", boxContent1);
var book11 = new Book("My Life", 10, "Kayal", 999, "Kayal Inc.", 9274);
var book12 = new Book("His Life", 11, "Keko", 666, "Keko Inc.", 6274);
boxContent1.push(book11);
boxContent1.push(book12);
box1.deleteBook("His Life");
console.log(box1);
console.log("number of books in box1: " + box1.numOfBooks());

var boxContent2 = [];
var box2 = new Box(30, 40, 60, "Metal", boxContent2);
var book21 = new Book("My Story", 20, "Ehab", 333, "Ehab Inc.", 3274);
var book22 = new Book("His Story", 21, "Hoba", 111, "Hoba Inc.", 1274);
boxContent2.push(book21);
boxContent2.push(book22);
console.log(box2);
console.log("number of books in box2: " + box2.numOfBooks());

console.log(Box.valueOf(box1, box2));
