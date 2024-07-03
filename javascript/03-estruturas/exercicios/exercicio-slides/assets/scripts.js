// vetor da primeira parte
const itemsMenu = ["Home", "Quem Somos", "Serviços", "Portfólio"];
// vetor de objetos da segunda parte
let intemsArrayObj = [
    {
        menu : "Home",
        h1 : "Título para Home",
        p : "Texto para o parágrafo da Home",
        image : "assets/images/home.png",
    },
    {
        menu : "Quem Somos",
        h1 : "Título para Quem Somos",
        p : "Texto para o parágrafo da Quem Somos.",
        image: "assets/images/about.png"
    },
    {
        menu : "Serviços",
        h1 : "Título para Serviços",
        p : "Texto para o parágrafo da Serviços.",
        image: "assets/images/services.png"
    },
    {
        menu : "Portfólio",
        h1 : "Título para Portfólio",
        p : "Texto para o parágrafo da Portfólio.",
        image: "assets/images/portifolio.png"
    },
    {
        menu : "Contato",
        h1 : "Título para Contato",
        p : "Texto para o parágrafo da Contato.",
        image: "assets/images/portifolio.png"
    }];

var itemChoice;

function changeContent (item)
{
    if(itemChoice == item.menu){
        document.querySelector("h1").textContent = item.h1;
        document.querySelector("#main").textContent = item.p;
        document.querySelector("#image").setAttribute("src",item.image);
    }
}

function clickItem (item) {
    itemChoice = item.target.textContent;
    intemsArrayObj.forEach(changeContent);
}

function showItems (item){
    let ulItem = document.createElement("li");
    ulItem.textContent = item.menu;
    ulItem.addEventListener("click",clickItem);
    let menu = document.querySelector(".menu");
    menu.insertAdjacentElement("beforeend",ulItem);
}

intemsArrayObj.forEach(showItems);
