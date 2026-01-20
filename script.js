let addBookButton = document.querySelector(".add-button");
let bookshelf = document.querySelector(".bookshelf");
addBookButton.addEventListener("click", (e) => {
    let newBook = document.createElement("div");
    newBook.classList.add("book");
    bookshelf.append(newBook);
});