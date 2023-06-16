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





localStorage.setItem('chave1', 'valor1');
localStorage.setItem('chave2', 'valor2');

//localStorage.removeItem("chave1");
localStorage.clear();
const chave01 = localStorage.getItem('chave1');
const chave02 = localStorage.getItem('chave2');

const itensString =  JSON.stringify(itemList);
console.log(itensString);
const itensListObj = JSON.parse(itensString);

console.log(itensListObj);
