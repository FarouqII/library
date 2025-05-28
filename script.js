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
}

addBookToLibrary("LoTR: Return of The King", "Tolkien");
addBookToLibrary("The Secret History", "Donna Tartt");