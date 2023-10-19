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

    if(event.target.tagName === "TD"){
        console.log(`Mostrar: ${event.target.parentNode.getAttribute("data-id")}`);
        openModal();
    }

    if(event.target.tagName === "BUTTON"){
        console.log(`Apagar: ${event.target.parentNode.parentNode.getAttribute("data-id")}`);
    }
});
