import {getCategories} from "./functions.js";

getCategories();

const category = document.querySelector("#category");
category.addEventListener("change",() => {
    //console.log(category.value);
    // api/products-by-category.php?categoryId=2
    const urlProductsByCategory = `api/products-by-category.php?categoryId=${category.value}`;
    //console.log(urlProductsByCategory);
    fetch(urlProductsByCategory, {method : "get"}).then((response) => {
        //console.log(response);
        response.json().then((products) => {
            //console.log(products);
            const productList = document.querySelector("#productList");
            productList.innerHTML = '';
            products.forEach((product) => {
                //console.log(product);
                const tr = document.createElement("tr");
                tr.setAttribute("data-id", product.id);
                tr.innerHTML = `<td>${product.id}</td><td>${product.name}</td><td>${product.price}</td>`;
                productList.appendChild(tr);
            });
        });
    });
});

const productName = document.querySelector("#productName");
productName.addEventListener("keyup", () => {
    if(productName.value.length < 3){
        return;
    }

    const param = {
        "name" : productName.value
    };
    const query = new URLSearchParams(param);
    const urlProductsByName = `api/products-by-name.php?${query.toString()}`;

    fetch(urlProductsByName, {method : "get"}).then((response) => {
        response.json().then((products) => {
            //console.log(products);
            const productList = document.querySelector("#productList");
            productList.innerHTML = '';
            products.forEach((product) => {
                //console.log(product);
                const tr = document.createElement("tr");
                // [novo] crie um atributo data-id no tr e coloque o valor do id do produto
                tr.setAttribute("data-id", product.id);

                tr.innerHTML = `<td>${product.id}</td><td>${product.name}</td><td>${product.price}</td>`;
                productList.appendChild(tr);
            });
        });
    });
});

const tableProducts = document.querySelector("table");

// Seletor para a modal
const modal = document.getElementById("edit-modal");

// Seletor para o botão de fechar a modal
const closeModalButton = document.querySelector(".close");

// Seletor para o formulário de edição
const editForm = document.getElementById("edit-form");

// Função para abrir a modal com dados do produto (vai receber por parâmetro o id do produto)
function openModal(productId) {
    modal.style.display = "block";
    console.log(productId);
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

tableProducts.addEventListener("click", (event) => {
    // mostrar no console o id do produto cliacado
    //console.log(event.target.parentNode);
    //console.log(event.target.parentNode.getAttribute("data-id"));
    openModal(event.target.parentNode.getAttribute("data-id"));
});
