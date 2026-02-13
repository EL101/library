let addBookButton = document.querySelector(".add-button");
let bookshelf = document.querySelector(".bookshelf");
let dialog = document.querySelector("dialog")
let exitDialog = document.querySelector(".exit")
let bookForm = document.querySelector(".book-form")
let bookFormSubmit = document.querySelector(".book-form-submit")
addBookButton.addEventListener("click", (e) => {
    dialog.showModal()
    dialog.classList.toggle("dialog-open")
})
exitDialog.addEventListener("click", (e) => {
    dialog.close()
    dialog.classList.toggle("dialog-open")
})
bookFormSubmit.addEventListener("click", e => {
    if (bookForm.checkValidity()) {
        let titleInput = document.querySelector("input#title")
        let authorInput = document.querySelector("input#author")
        let pageInput = document.querySelector("input#pages")
        let completedInput = document.querySelector("input#completed")
        addBook(titleInput.value, authorInput.value, parseInt(pageInput.value), completedInput.checked)
        exitDialog.click()
        console.log(library)
        displayLibrary()
    } else {
        bookForm.reportValidity()
    }
})
const library = []
function Book(author, title, pages, read, id) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
    this.id = id
}

function addBook(author, title, pages, read) {
    library.push(new Book(author, title, pages, read, crypto.randomUUID()))
}

function displayLibrary() {
    for (let book in library) {
        let newBook = document.createElement("div");
        newBook.classList.add("book")
        bookshelf.append(newBook)
    }
}