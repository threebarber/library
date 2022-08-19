let bookLibrary = [];


document.querySelector("#addButton").addEventListener('click', function () {
    addNewBook();
})

/*
const testBook1 = new Book(idCounter,"edward abbey","monkey gang",384,false);

idCounter+=1;

const testBook2 = new Book(idCounter,"edward jones","monkey team",323,true);


bookLibrary.push(testBook1);
bookLibrary.push(testBook2);

*/


for (var book of bookLibrary) {
    console.log(book.title);
}


function Book(author, title, pages, read) {

    this.id = `${title}-${Date.now()}`;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

    this.addBook = function () {
        bookLibrary.push(this);
    }
}


function addNewBook() {

    let author = document.querySelector("#authorInput").value;
    let title = document.querySelector("#titleInput").value;
    let pages = document.querySelector("#pagesInput").value;

    var read;

    if (document.querySelector("#readCheckbox").checked) {
        read = true;
    } else {
        read = false;
    }

    var newBook = new Book(author, title, pages, read);
    
    newBook.addBook();

    displayBooks(bookLibrary);
}



function displayBooks(bookLibrary) {


    const bookDiv = document.querySelector(".bookDiv");

    bookDiv.innerHTML = "";


    for (var book of bookLibrary) {

        console.log(book.title);


        var newBook = document.createElement("div");
        newBook.classList.add("bookItem");

        var newBookTitle = document.createElement("h3");
        newBookTitle.innerText = ` #${book.id} Title: ${book.title}`;

        var newBookAuthor = document.createElement("p");
        newBookAuthor.innerText = `Author: ${book.author}`


        var newBookpagesRead = document.createElement("p");
        newBookpagesRead.innerText = `Pages: ${book.pages} Read? ${book.read}`;

        var delButton = document.createElement("button");
        delButton.innerText = "Remove Book";


        var readButton = document.createElement("button");
        readButton.innerText = "Change Read";
    
    
        readButton.addEventListener('click', function () {
            changeRead(book.id);
        })

        delButton.addEventListener('click', function () {
            deleteBook(book.id);
        })


        newBook.appendChild(newBookTitle);
        newBook.appendChild(newBookAuthor);
        newBook.appendChild(newBookpagesRead);
        newBook.appendChild(delButton);
        newBook.appendChild(readButton);

        bookDiv.appendChild(newBook);


    }
}


function displaySingleBook(book) {

    const bookDiv = document.querySelector(".bookDiv");


    var newBook = document.createElement("div");
    newBook.classList.add("bookItem");

    var newBookTitle = document.createElement("h3");
    newBookTitle.innerText = ` #${book.id} Title: ${book.title}`;

    var newBookAuthor = document.createElement("p");
    newBookAuthor.innerText = `Author: ${book.author}`


    var newBookpagesRead = document.createElement("p");
    newBookpagesRead.innerText = `Pages: ${book.pages} Read? ${book.read}`;

    var delButton = document.createElement("button");
    delButton.innerText = "Remove Book";

    var readButton = document.createElement("button");
    readButton.innerText = "Change Read";


    readButton.addEventListener('click', function () {
        changeRead(book.id);
    })

    delButton.addEventListener('click', function () {
        deleteBook(book.id);
    })


    newBook.appendChild(newBookTitle);
    newBook.appendChild(newBookAuthor);
    newBook.appendChild(newBookpagesRead);
    newBook.appendChild(delButton);
    newBook.appendChild(readButton);

    bookDiv.appendChild(newBook);
}


function updateBooksDisplay() {


    const bookDiv = document.querySelector(".bookDiv");

    bookDiv.innerHTML = "";

    for (var book of bookLibrary) {


        var newBook = document.createElement("div");
        newBook.classList.add("bookItem");

        var newBookTitle = document.createElement("h3");
        newBookTitle.innerText = ` #${book.id} Title: ${book.title}`;

        var newBookAuthor = document.createElement("p");
        newBookAuthor.innerText = `Author: ${book.author}`


        var newBookpagesRead = document.createElement("p");
        newBookpagesRead.innerText = `Pages: ${book.pages} Read? ${book.read}`;

        var delButton = document.createElement("button");
        delButton.innerText = "Remove Book";

        var readButton = document.createElement("button");
        readButton.innerText = "Change Read";


        readButton.addEventListener('click', function () {
            changeRead(book.id);
        })


        delButton.addEventListener('click', function () {
            deleteBook(book.id);
        })


        newBook.appendChild(newBookTitle);
        newBook.appendChild(newBookAuthor);
        newBook.appendChild(newBookpagesRead);
        newBook.appendChild(delButton);
        newBook.appendChild(readButton);

        bookDiv.appendChild(newBook);


    }
}


function deleteBook(bookId) {
    console.log(`Deleting book id ${bookId}`);

    bookLibrary.splice(bookLibrary.findIndex(x => x.id === bookId), 1);

    console.log(` Current Books in Library: ${bookLibrary.length}`);

    updateBooksDisplay();
}

function changeRead(bookId) {

    bookIndex = bookLibrary.findIndex(x => x.id === bookId);

    console.log(` Logging Book index variable: ${bookIndex}`);

    console.log(`Current read value: ${bookLibrary[bookIndex].read}`);

    bookLibrary[bookIndex].read = !bookLibrary[bookIndex].read;


    console.log(`New read value: ${bookLibrary[bookIndex].read}`);

    updateBooksDisplay();

}




