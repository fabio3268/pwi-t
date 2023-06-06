const propertyList = [
    {
        description: "Linda casa na Zona Sul",
        category: "Casa",
        price: 1500000.00,
        image: "assets/images/property01.jpg"
    },
    {
        description: "Apartamento com vista para o mar",
        category: "Apartamento",
        price: 800000.00,
        image: "assets/images/property02.jpg"
    },
    {
        description: "Terreno amplo no centro da cidade",
        category: "Terreno",
        price: 500000.00,
        image: "assets/images/property03.jpg"
    },
    {
        description: "Casa térrea com jardim",
        category: "Casa",
        price: 1200000.00,
        image: "assets/images/property04.jpg"
    },
    {
        description: "Apartamento luxuoso no bairro nobre",
        category: "Apartamento",
        price: 2000000.00,
        image: "assets/images/property05.jpg"
    },
    {
        description: "Terreno com vista panorâmica",
        category: "Terreno",
        price: 700000.00,
        image: "assets/images/property06.jpg"
    },
    {
        description: "Casa com piscina e área de lazer",
        category: "Casa",
        price: 1800000.00,
        image: "assets/images/property07.jpg"
    },
    {
        description: "Apartamento moderno no centro histórico",
        category: "Apartamento",
        price: 950000.00,
        image: "assets/images/property08.jpg"
    },
    {
        description: "Terreno próximo à praia",
        category: "Terreno",
        price: 600000.00,
        image: "assets/images/property09.jpg"
    },
    {
        description: "Casa aconchegante em condomínio fechado",
        category: "Casa",
        price: 1350000.00,
        image: "assets/images/property10.jpg"
    }
];

//document.querySelector(".property-card")

propertyList.forEach((property) => {
    console.log(property);
    const propertyListDiv = document.querySelector(".property-list");
    const cardProperty = document.createElement("div");
    cardProperty.setAttribute("class","property-card");
    cardProperty.innerHTML = `
            <img src="${property.image}" alt="${property.description}">
            <div class="property-description">${property.description}</div>
            <div class="property-category">${property.category}</div>
            <div class="property-price">${property.price}</div>
           `;
    propertyListDiv.insertAdjacentElement("afterbegin",cardProperty);

});


