let booksList = [
    {
        title: "A Menina que Roubava Livros",
        author: "Markus Zusak",
        status: "Disponível"
    },
    {
        title: "O Pequeno Príncipe",
        author: "Antoine de Saint-Exupéry",
        status: "Emprestado"
    },
    {
        title: "1984",
        author: "George Orwell",
        status: "Disponível"
    },
    {
        title: "O Nome da Rosa",
        author: "Umberto Eco",
        status: "Emprestado"
    },
    {
        title: "A Revolução dos Bichos",
        author: "George Orwell",
        status: "Disponível"
    },
    {
        title: "A Arte da Guerra",
        author: "Sun Tzu",
        status: "Disponível"
    },
    {
        title: "O Hobbit",
        author: "J.R.R. Tolkien",
        status: "Emprestado"
    },
    {
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        author: "J.R.R. Tolkien",
        status: "Disponível"
    },
    {
        title: "O Grande Gatsby",
        author: "F. Scott Fitzgerald",
        status: "Emprestado"
    },
    {
        title: "Cem Anos de Solidão",
        author: "Gabriel Garcia Márquez",
        status: "Disponível"
    }
];

function insertBooks(book) {
    //console.log(book)
    const bookList = document.querySelector("#books-list");
    const newBookLi = document.createElement("li");
    newBookLi.innerHTML = `${book.title} - ${book.author} - ${book.status}`;
    bookList.insertAdjacentElement("beforeend", newBookLi);
}

booksList.forEach(insertBooks);

const selectFilter = document.querySelector("#status-filter");
const ulListBooksFiltered = document.querySelector("#filtered-books-list");
function insertBooksFiltered (book){
    //console.log(book);
    if(selectFilter.value === book.status){
        const newBook = document.createElement("li");
        newBook.textContent = `${book.title} - ${book.author} - ${book.status}`;
        ulListBooksFiltered.insertAdjacentElement("beforeend",newBook);
    }
}

function listBooksFiltered (){
    //console.log(selectFilter.value);
    ulListBooksFiltered.innerHTML = "";
    booksList.forEach(insertBooksFiltered);
}

selectFilter.addEventListener("change", listBooksFiltered );
