let products = [
    {
        name: "Ar Condicionado Modelo 1",
        image: "assets/images/image01.jpeg",
    },
    {
        name: "Ar Condicionado Modelo 2",
        image: "assets/images/image02.jpeg",
    },
    {
        name: "Ar Condicionado Modelo 3",
        image: "assets/images/image03.jpeg",
    },
    {
        name: "Ar Condicionado Modelo 4",
        image: "assets/images/image04.jpeg",
    },
    {
        name: "Ar Condicionado Modelo 5",
        image: "assets/images/image05.jpeg",
    },
    {
        name: "Ar Condicionado Modelo 6",
        image: "assets/images/image06.jpeg",
    },
    {
        name: "Ar Condicionado Modelo 7",
        image: "assets/images/image07.jpeg",
    },
    {
        name: "Ar Condicionado Modelo 8",
        image: "assets/images/image08.jpeg",
    }
];

const divProducts = document.querySelector(".products");
products.forEach((product, index) => {
    const divProduct = document.createElement("div");
    divProduct.setAttribute("class","product-item");
    divProduct.innerHTML = `
         <img src="${product.image}" alt="${product.name}" class="product-image">
         <p>${product.name}</p>`;
    divProducts.appendChild(divProduct);
});