// // Author constructor
// function Author(name, email) {
//   this.name = name;
//   this.email = email;
// }
// // Book constructor
// function Book(name, price, author) {
//   this.name = name;
//   this.price = price;
//   this.author = author;
// }

// // Function to display the table
// function displayTable(books) {
//   console.log("\nBooks Table:");
//   console.log("-------------------------------------------");
//   console.log("|   Name\t|   Price\t|   Author\t|");
//   console.log("-------------------------------------------");
//   books.forEach((book, index) => {
//     console.log(
//       `|   ${book.name}\t|   ${book.price}\t|   ${book.author.name}\t|   Edit   |   Delete   |`
//     );
//   });
//   console.log("-------------------------------------------");
// }

// // Function to get user input for creating a book
// function getBookInfo() {
//   const name = prompt("Enter the book name: ");
//   const price = parseFloat(prompt("Enter the book price: "));
//   const authorName = prompt("Enter the author name: ");
//   const authorEmail = prompt("Enter the author email: ");

//   // Validate input
//   if (!name || isNaN(price) || !authorName || !authorEmail) {
//     console.log("Invalid input. Please enter valid data.");
//     return null;
//   }

//   const author = new Author(authorName, authorEmail);
//   const book = new Book(name, price, author);
//   return book;
// }

// // Function to create an array of books based on user input
// function createBooksArray() {
//   const numBooks = parseInt(prompt("Enter the number of books: "));

//   if (isNaN(numBooks) || numBooks <= 0) {
//     console.log("Invalid input. Please enter a valid number.");
//     return [];
//   }

//   const books = [];
//   for (let i = 0; i < numBooks; i++) {
//     console.log(`\nEntering information for Book ${i + 1}:`);
//     const book = getBookInfo();
//     if (book) {
//       books.push(book);
//     } else {
//       // If invalid input, decrement the loop counter to re-enter data for the same book
//       i--;
//     }
//   }

//   return books;
// }

// // Main program
// const booksArray = createBooksArray();
// displayTable(booksArray);
/////////////////////////////////////////////
var numOfBooks = document.getElementById("numOfBooks");
var createBtn = document.getElementById("createBtn");
var workArea = document.getElementById("workArea");
var createForm = document.getElementById("createForm");
///error span///
var errorName = document.getElementById("errorName");
var errorPrice = document.getElementById("errorPrice");
var errorAutName = document.getElementById("errorAutName");
var errorEmail = document.getElementById("errorEmail");
/////inputs////
var bookName = document.getElementById("bookName");
var Price = document.getElementById("Price");
var authorName = document.getElementById("authorName");
var authorEmail = document.getElementById("authorEmail");
//////////////
var body = document.getElementById("body");
var addCount = 0;
var arr = [];
createBtn.addEventListener("click", openFrom);
function openFrom() {
  console.log(numOfBooks.value);
  if (numOfBooks.value && numOfBooks.value > 0) {
    workArea.classList.toggle("hidden");
    createForm.classList.toggle("hidden");
  } else {
    alert("Enter valid numOfBooks");
  }
}
function Book(name, price, author) {
  this.name = name;
  this.price = price;
  this.author = author;
}
function Author(name, email) {
  this.name = name;
  this.email = email;
}
addBtn.addEventListener("click", fillTable);
function fillTable() {
  // // var boo = new Book(bookName.value, Price.value, auth);
  // console.log(auth);
  // //console.log(boo);
  // arr.push(new Book(bookName.value, Price.value, auth));
  if (bookName.value === "" || isFinite(bookName.value)) {
    errorName.classList.toggle("hidden");
  }
  if (Price.value === "" || isNaN(Price.value) || Price.value <= 0) {
    errorPrice.classList.toggle("hidden");
  }
  if (
    authorEmail.value === "" ||
    isFinite(authorEmail.value /*|| validateEmail(authorEmail.value)*/)
  ) {
    errorEmail.classList.toggle("hidden");
  }
  if (authorName.value === "" || isFinite(authorName.value)) {
    errorAutName.classList.toggle("hidden");
  } else {
    var auth = new Author(authorName.value, authorEmail.value);
    arr.push(new Book(bookName.value, Price.value, auth));
    addCount++;
    bookName.value = "";
    authorName.value = "";
    authorEmail.value = "";
    Price.value = "";
    errorName.classList.add("hidden");
    errorEmail.classList.add("hidden");
    errorAutName.classList.add("hidden");
    errorPrice.classList.add("hidden");
    if (arr.length == numOfBooks.value) {
      for (let i = 0; i < arr.length; i++) {
        body.innerHTML += `<tr>
      <td>${arr[i].name}</td>
      <td>${arr[i].price}</td>
      <td>${arr[i].author.name}</td>
      <td>${arr[i].author.email}</td>
      <td><button id="update" onclick="updateRow(${i})" class="update">Update</button></td>
      <td><button id="delete" onclick="deleteRow(${i})" class="delete">Delete</button></td>
  </tr>`;
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(authorEmail.value);
      }
    }
  }
}

//update//delete//
var updateBtn = document.getElementById("update");
var deleteBtn = document.getElementById("delete");
//////
