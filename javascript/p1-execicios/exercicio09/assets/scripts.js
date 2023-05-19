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

function listBooksFiltered (){
    console.log(selectFilter.value);
    for(let i = 0; i < booksList.length; i++){
        if(booksList[i].status === selectFilter.value){
            console.log(booksList[i]);
        }
    }
}

selectFilter.addEventListener("change", listBooksFiltered );
