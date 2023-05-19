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

function insertBooks(book){
    const newBookDiv = document.createElement("div");
    newBookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>${book.author}</p>
    <p>${book.status}</p>
`;
    if(book.status === "Disponível"){
        newBookDiv.setAttribute("class", "card status disponivel");
    }
    else{
        newBookDiv.setAttribute("class", "card status emprestado");
    }

    document.querySelector("body").insertAdjacentElement("beforeend",newBookDiv);
}

booksList.forEach(insertBooks);
