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

// --------------------------------------------

const logo = document.getElementById('logo');
const frame = document.getElementById('frame');
const formContainer = document.getElementById('form-container');
const submitBtn = document.querySelector('button');
const password = document.getElementById('password');
const confirmpw = document.getElementById('confirmPassword');
const form = document.querySelector('form');

// Loading Screen
window.onload = () => {
    setTimeout(() => {
      if (window.innerWidth >= 768) {
        logo.style.transform = "translate(50vw, 50vh) translate(-50%, -300%) scale(0.8)";
      } else if (window.innerWidth < 768) {
        if (window.innerWidth < 380) {
        logo.style.transform = "translate(50vw, 50vh) translate(-50%, -305%) scale(0.5)";
      } else
        logo.style.transform = "translate(50vw, 50vh) translate(-50%, -200%) scale(0.5)";
      }
      if (window.innerWidth > 1000) frame.style.opacity = '1';
      setTimeout(() => formContainer.style.opacity = '1', 750);
    }, 2000);
  };

// Owl Animation
frame.src = "./assets/owl-animation/pixil-frame-0.png";

function blink() {
  frame.src = "./assets/owl-animation/pixil-frame-1.png"

  setTimeout(() => {
    frame.src = "./assets/owl-animation/pixil-frame-0.png"

    const nextBlink = Math.floor(Math.random() * 4000) + 2000;
    setTimeout(blink, nextBlink);
  }, 150)
}
setTimeout(blink, 2000);

// Form
form.addEventListener('submit', event => {
  if (password !== confirmpw) {
    event.preventDefault();
    alert("Passwords don't match!");
  }
})