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

const ulBooks = document.querySelector("#books-list");
const ulBooksFiltered = document.querySelector("#filtered-books-list");
const selectStatus = document.querySelector("#status-filter");

function insertBooks (e) {
    //console.log(e);
    const li = document.createElement("li");
    li.textContent = `${e.title} - ${e.author} - ${e.status}`;
    ulBooks.insertAdjacentElement("beforeend",li);
}

booksList.forEach(insertBooks);

function insertBooksSelected (e){
    console.log("oi");
    if(e.status === selectStatus.value){
        const li = document.createElement("li");
        li.textContent = `${e.title} - ${e.author} - ${e.status}`;
        ulBooksFiltered.insertAdjacentElement("afterbegin",li);
    }
}

function insertBooksFiltered (){
    console.log(selectStatus.value);
    ulBooksFiltered.innerHTML = "";
    booksList.forEach(insertBooksSelected);
}

selectStatus.addEventListener("change", insertBooksFiltered);
