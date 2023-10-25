import {showDataSelect} from "./functions.js";

const tableBooks = document.querySelector("table");

// Seletor para a modal
const modal = document.querySelector("#edit-modal");

// Seletor para o botão de fechar a modal
const closeModalButton = document.querySelector(".close");

// Seletor para o formulário de edição
const editForm = document.querySelector("#edit-form");

// Função para abrir a modal com dados do produto (vai receber por parâmetro o id do produto)
function openModal() {
    modal.style.display = "block";
}

// Fechar a modal ao clicar no botão de fechar

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar a modal quando o usuário clicar fora dela
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

tableBooks.addEventListener("click", (event) => {
    if(event.target.tagName === "TD"){
        console.log(`Mostrar: ${event.target.parentNode.getAttribute("data-id")}`);
        openModal();
    }

    if(event.target.tagName === "BUTTON"){
        console.log(`Apagar: ${event.target.parentNode.parentNode.getAttribute("data-id")}`);
    }
});

const selectCategories = document.querySelector("#category");
const selectCategoriesModal = document.querySelector("#category_id");
const selectAuthors = document.querySelector("#author");
const selectAuthorsModal = document.querySelector("#author_id");

const urlGetCategories = "api/categories-list.php";
const urlGetAuthors = "api/authors-list.php";
const optionsGet = {
    method: "GET"
};

fetch(urlGetCategories, optionsGet).then((response) => {
    response.json().then((categories) => {
        showDataSelect(categories, selectCategories);
        showDataSelect(categories, selectCategoriesModal);
    });
});

fetch(urlGetAuthors, optionsGet).then((response) => {
    response.json().then((authors) => {
        showDataSelect(authors, selectAuthors);
        showDataSelect(authors, selectAuthorsModal);
    });
});

