const logo = document.getElementById('logo');
const frame = document.getElementById('frame');
const mainContent = document.getElementById('main-content');

// Loading Screen
window.onload = () => {
    setTimeout(() => {
      logo.style.transform = "translate(50vw, 50vh) translate(-50%, -375%) scale(0.6)";
      if (window.innerWidth > 1000) frame.style.opacity = '1';
      setTimeout(() => mainContent.style.opacity = '1', 50);
    }, 2000);
  };

// Owl Animation
frame.src = "./assets/owl-animation/pixil-frame-0.png";

function blink() {
  frame.src = "./assets/owl-animation/pixil-frame-1.png";

  setTimeout(() => {
    frame.src = "./assets/owl-animation/pixil-frame-0.png"

    const nextBlink = Math.floor(Math.random() * 4000) + 2000;
    setTimeout(blink, nextBlink);
  }, 150)
}
setTimeout(blink, 2000);

// -----------------------------------------------------------

const gridContainer = document.getElementById('grid-container');
const addBookBtn = document.getElementById('add-book');

let myLibrary = [];

function Book(id, name, author) {
    this.id = id;
    this.name = name;
    this.author = author;
}

function addBookToLibrary(name, author) {
    const newID = crypto.randomUUID();

    let newBook = new Book(newID, name, author);
    myLibrary.push(newBook);

    const bookDiv = document.createElement('div');
    bookDiv.className = "book";
    const titleDiv = document.createElement('div');
    titleDiv.className = "title";
    titleDiv.textContent = newBook.name;
    const authorDiv = document.createElement('div');
    authorDiv.className = "author";
    authorDiv.textContent = newBook.author;
    const idDiv = document.createElement('p');
    idDiv.className = "id";
    idDiv.textContent = newBook.id;
    const statusButton = document.createElement('button');
    statusButton.className = "readStatus unread";
    statusButton.addEventListener('click', () => {
      if (statusButton.className.includes("unread")) {
        statusButton.className = "readStatus read";
      } else {
        statusButton.className = "readStatus unread";
      }
    });

    bookDiv.append(titleDiv, authorDiv, idDiv, statusButton);

  gridContainer.appendChild(bookDiv);
}

addBookBtn.addEventListener('click', () => {
  addBookBtn.className = "add book form";
})

addBookToLibrary("LoTR: Return of The King", "Tolkien");
addBookToLibrary("The Secret History", "Donna Tartt");