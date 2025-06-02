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

    console.log(newBook.name);

    bookDiv.innerHTML = `
    <div class="title">${newBook.name}</div>
    <div class="author">${newBook.author}</div>
    <p class="id">${newBook.id}</p>
    <button class="readStatus unread"></button>`;

  gridContainer.appendChild(bookDiv);
}

addBookBtn.addEventListener('click', () => {
  addBookBtn.innerHTML = `
    <form action="#" method="POST">
        <label for="add-title">Title:</label>
        <input type="text" id="add-title" for="add-title">

        <label for="add-author">Author:</label>
        <input type="text" id="add-author" for="add-author">

        <button type="submit" id="add-btn">Add +</button>
        <button id="cancel-btn">Cancel</button>
    </form>`;
    addBookBtn.className = "book add form";
})

addBtn.addEventListener("click", () => {
  let newTitle = document.getElementById("add-title").value;
  let newAuthor = document.getElementById("add-author").value;
  addBookToLibrary(newTitle, newAuthor);
})