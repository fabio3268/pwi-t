const itemList = [
    {
        description: "Computador",
        price: 5000.00
    },
    {
        description: "Notebook",
        price: 3500.00
    },
    {
        description: "Monitor",
        price: 1000.00
    },
    {
        description: "Teclado",
        price: 100.00
    },
    {
        description: "Mouse",
        price: 50.00
    },
    {
        description: "Impressora",
        price: 300.00
    },
    {
        description: "Roteador",
        price: 200.00
    },
    {
        description: "Headset",
        price: 250.00
    },
    {
        description: "Pen Drive",
        price: 30.00
    },
    {
        description: "Câmera Webcam",
        price: 150.00
    }
];

const tbody = document.querySelector("tbody");



itemList.forEach((product) => {
    //console.log(product.description, product.price );
    const line = document.createElement("tr");
    line.innerHTML = `<td>${product.description}</td><td>${product.price}</td>`;
    tbody.insertAdjacentElement("beforeend",line);
});

const buttonAverage = document.querySelector("#calculate-average");
buttonAverage.addEventListener("click", () => {
    let sum = 0;
    itemList.forEach((product) => {
        sum = sum + parseFloat(product.price);
    });
    console.log(`Soma dos preços: ${sum}`);
    document.querySelector("#average-div").textContent = `${sum / itemList.length}`;
});
