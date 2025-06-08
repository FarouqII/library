const logo = document.getElementById('logo');
const frame = document.getElementById('frame');
const mainContent = document.getElementById('main-content');

// Loading Screen
window.onload = () => {
    setTimeout(() => {
      logo.style.transform = "translate(50vw, 50vh) translate(-50%, -315%) scale(0.6)";
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
const addBookContainer = document.getElementById('add-book');
const addBookBtn = document.getElementById('add-book-btn');
const addBtn = document.getElementById('add-btn');

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

    bookDiv.innerHTML = `
    <div class="title">${newBook.name}</div>
    <div class="author">${newBook.author}</div>
    <p class="id">${newBook.id}</p>
    <button class="readStatus unread" id="status-btn"></button>`;

    gridContainer.appendChild(bookDiv);

    const statusBtn = document.getElementById('status-btn');
    statusBtn.addEventListener("click", () => {
      if (statusBtn.className.includes("unread")) statusBtn.className = "readStatus read";
      else statusBtn.className = "readStatus unread";
    })
}

addBookBtn.addEventListener('click', () => {
  addBookContainer.className = "book add form";
  addBookContainer.innerHTML = `
    <form id="book-form">
        <label for="add-title">Title:</label>
        <input type="text" id="add-title" autocomplete="off">

        <label for="add-author">Author:</label>
        <input type="text" id="add-author" autocomplete="off">

        <button type="submit" id="add-btn">Add +</button>
        <button type="button" id="cancel-btn">Cancel</button>
    </form>`;

    const form = document.getElementById('book-form');
    const cancelBtn = document.getElementById('cancel-btn');

    form.addEventListener('submit', e => {
      e.preventDefault();
      const title = document.getElementById('add-title').value.trim();
      const author  = document.getElementById('add-author').value.trim();

      if (!title || !author) return;

      addBookToLibrary(title, author);
      resetAddContainer();
    })
    cancelBtn.addEventListener('click', resetAddContainer);
})

function resetAddContainer() {
  addBookContainer.className = "book add";
  addBookContainer.innerHTML = "<button id=\"add-book-btn\">Add Book</button>";
}