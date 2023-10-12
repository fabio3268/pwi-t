const tableBooks = document.querySelector("table");

// Seletor para a modal
const modal = document.getElementById("edit-modal");

// Seletor para o botão de fechar a modal
const closeModalButton = document.querySelector(".close");

// Seletor para o formulário de edição
const editForm = document.getElementById("edit-form");

// Função para abrir a modal com dados do produto (vai receber por parâmetro o id do produto)
function openModal(bookId) {
    modal.style.display = "block";
    console.log(bookId);
}

// Fechar a modal ao clicar no botão de fechar
closeModalButton.onclick = function() {
    modal.style.display = "none";
};

// Fechar a modal quando o usuário clicar fora dela
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

tableBooks.addEventListener("click", (event) => {
    // mostrar no console o id do produto cliacado
    //console.log(event.target.parentNode);
    //console.log(event.target.parentNode.getAttribute("data-id"));
    openModal(event.target.parentNode.getAttribute("data-id"));
});
