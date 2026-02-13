let addBookButton = document.querySelector(".add-button");
let bookshelf = document.querySelector(".bookshelf");
let dialog = document.querySelector(".add-book-dialog")
let exitDialog = document.querySelector(".exit")
let bookForm = document.querySelector("#book-form")
let bookFormSubmit = document.querySelector(".book-form-submit")

const library = []
const mapIDtoBook = new Map()
addBookButton.addEventListener("click", (e) => {
    dialog.showModal()
    dialog.classList.toggle("dialog-open")
})
exitDialog.addEventListener("click", (e) => {
    dialog.close()
    dialog.classList.toggle("dialog-open")
})
bookFormSubmit.addEventListener("click", e => {
    e.preventDefault()
    if (bookForm.checkValidity()) {
        let titleInput = document.querySelector("input#title")
        let authorInput = document.querySelector("input#author")
        let pageInput = document.querySelector("input#pages")
        let completedInput = document.querySelector("input#completed")
        addBook(titleInput.value, authorInput.value, parseInt(pageInput.value), completedInput.checked)
        displayLibrary()
        exitDialog.click()
    } else {
        bookForm.reportValidity()
    }
})


const colors = ["#63a462", "#ba2f14", "#3e65b4", "#8f6039"]
function Book(author, title, pages, read, id, color) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
    this.id = id
    this.color = color
}

function toggleRead(e) {
    e.target.classList.toggle("complete")
    e.target.textContent = e.target.classList.contains("complete") ? "Complete" : "Still Reading"
    console.log(mapIDtoBook.get(e.target.dataset.id))
    console.log(e.target.dataset.id)
    let book = mapIDtoBook.get(e.target.dataset.id)
    book.read = !book.read
}
function addBook(author, title, pages, read) {
    let id = crypto.randomUUID()
    let book = new Book(
        author, 
        title, 
        pages, 
        read, 
        id,
        colors[Math.floor(Math.random() * colors.length)])
    library.push(book)
    mapIDtoBook.set(id, book)
}

function displayLibrary() {
    bookshelf.innerHTML = ""
    for (let book of library) {
        let newBook = document.createElement("div")
        newBook.classList.add("book")
        let bookTitle = document.createElement("div")
        bookTitle.classList.add("book-title")
        bookTitle.textContent = book.title
        let bookAuthor = document.createElement("div")
        bookAuthor.classList.add("book-author")
        bookAuthor.textContent = book.author
        let bookPages = document.createElement("div")
        bookPages.classList.add("book-pages")
        bookPages.textContent = book.pages + " pages"
        let readButton = document.createElement("button")
        if (book.read) {
            readButton.classList.toggle("complete")
        }
        readButton.textContent = book.read ? "Completed" : "Still Reading"
        readButton.addEventListener("click", toggleRead)
        newBook.dataset.id = book.id
        // let bookPages = document.createElement("div")
        // bookPages.classList.add("book-pages")
        // bookPages.textContent = book.author
        newBook.style.backgroundColor = book.color
        newBook.append(
            bookTitle,
            bookAuthor,
            bookPages,
            readButton)
        bookshelf.append(newBook)
    }
}