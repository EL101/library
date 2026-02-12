let addBookButton = document.querySelector(".add-button");
let bookshelf = document.querySelector(".bookshelf");
let dialog = document.querySelector("#book-form")
addBookButton.addEventListener("click", (e) => {
    dialog.showModal()
});
const library = []
function Book(author, title, pages, read, id) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
    this.id = id
}

function addBook(author, title, pages, read) {
    library.append(new Book(author, title, pages, read, crypto.randomUUID()))
}

function displayLibrary() {
    for (let book in library) {
        let newBook = document.createElement("div");
        newBook.classList.add("book")
        bookshelf.append(newBook)
    }
}