let bookLibrary = [];

let idCounter = 1;


const testBook1 = new Book(idCounter,"edward abbey","monkey gang",384,false);
idCounter++;
const testBook2 = new Book(idCounter,"edward jones","monkey team",323,true);

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



function displayBooks(bookLibrary){

    const bookDiv = document.querySelector(".bookDiv");

    for (var book of bookLibrary){
        console.log(book.title);


        var newBook = document.createElement("div");
        newBook.classList.add("bookItem");
    
        var newBookText = document.createElement("p");
        newBookText.innerText = `Title: ${book.title} Author: ${book.author}`;

        newBook.appendChild(newBookText);

        bookDiv.appendChild(newBook);


    }
}




