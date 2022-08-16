let bookLibrary = [];

let idCounter = 1;

document.querySelector("#addButton").addEventListener('click',function(){
    addNewBook();
})


const testBook1 = new Book(idCounter,"edward abbey","monkey gang",384,false);
idCounter++;
const testBook2 = new Book(idCounter,"edward jones","monkey team",323,true);
idCounter++;

bookLibrary.push(testBook1);
bookLibrary.push(testBook2);

displayBooks(bookLibrary);

for (var book of bookLibrary){
    console.log(book.title);
}


function Book(id,author,title,pages,read){
    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

    this.addBook = function(){
        bookLibrary.push(this);
    }
}


function addNewBook(){
    let author = document.querySelector("#authorInput").value;
    let title = document.querySelector("#titleInput").value;
    let pages = document.querySelector("#pagesInput").value;

    var read;
    
    if(document.querySelector("#readCheckbox").checked){
        read = true;
    }else{
        read = false;
    }

    var newBook = new Book(idCounter,author,title,pages,read);

    displaySingleBook(newBook);

    bookLibrary.push(newBook);
    console.log(bookLibrary);
}



function displayBooks(bookLibrary){

    const bookDiv = document.querySelector(".bookDiv");

    for (var book of bookLibrary){
        console.log(book.title);


        var newBook = document.createElement("div");
        newBook.classList.add("bookItem");
    
        var newBookTitle = document.createElement("h3");
        newBookTitle.innerText = `Title: ${book.title}`;

        var newBookAuthor = document.createElement("p");
        newBookAuthor.innerText = `Author: ${book.author}`


        var newBookpagesRead = document.createElement("p");
        newBookpagesRead.innerText = `Pages: ${book.pages} Read? ${book.read}`;


        newBook.appendChild(newBookTitle);
        newBook.appendChild(newBookAuthor);
        newBook.appendChild(newBookpagesRead);

        bookDiv.appendChild(newBook);


    }
}


function displaySingleBook(book){

    const bookDiv = document.querySelector(".bookDiv");

    
    var newBook = document.createElement("div");
    newBook.classList.add("bookItem");

    var newBookTitle = document.createElement("h3");
    newBookTitle.innerText = `Title: ${book.title}`;

    var newBookAuthor = document.createElement("p");
    newBookAuthor.innerText = `Author: ${book.author}`


    var newBookpagesRead = document.createElement("p");
    newBookpagesRead.innerText = `Pages: ${book.pages} Read? ${book.read}`;


    newBook.appendChild(newBookTitle);
    newBook.appendChild(newBookAuthor);
    newBook.appendChild(newBookpagesRead);

    bookDiv.appendChild(newBook);
}




