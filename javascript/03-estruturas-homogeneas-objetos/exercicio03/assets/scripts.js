
const itemsMenu = [
    "Home",
    "Quem Somos",
    "Serviços",
    "Portfólio",
    "Contato",
    "Localização",
    "Teste"
];
/*const menu = document.querySelector(".menu");

function menuShow (item){
    const itemsMenu = `<li>${item}</li>`;
    menu.insertAdjacentHTML("beforeend",itemsMenu);
}*/

//itemsMenu.forEach(menuShow);

const intemsArrayObj = [
    {
        menu : "Home",
        h1 : "Título para Home",
        p : "Texto para o parágrafo da Home",
        image : "assets/images/home.png",
        image02 : "assets/images/home.png"
    },
    {
        menu : "Quem Somos",
        h1 : "Título para Quem Somos",
        p : "Texto para o parágrafo da Quem Somos.",
        image: "assets/images/about.png",
        image02 : "assets/images/home.png"


    },
    {
        menu : "Serviços",
        h1 : "Título para Serviços",
        p : "Texto para o parágrafo da Serviços.",
        image: "assets/images/services.png",
        image02 : "assets/images/home.png"
    },
    {
        menu : "Portfólio",
        h1 : "Título para Portfólio",
        p : "Texto para o parágrafo da Portfólio.",
        image: "assets/images/portifolio.png",
        image02 : "assets/images/home.png"
    },
    {
        menu : "Contato",
        h1 : "Título para Contado",
        p : "Texto para o parágrafo da Contato.",
        image: "assets/images/portifolio.png",
        image02 : "assets/images/home.png"
    }
    ];

var itemSelect;

function changeContent (item) {
    //console.log(itemSelect);
    //console.log(item.menu);
    if(itemSelect == item.menu){
        console.log(item.h1, item.p, item.image);
        document.querySelector("h1").textContent = item.h1;
        document.querySelector("#pMain").textContent = item.p;
       //document.querySelector("#image01").setAttribute("src",item.image);
        document.querySelector("#image01").src = item.image;
    }
}

function clickItem (item){
    //console.log(item.target.textContent);
    itemSelect = item.target.textContent;
    intemsArrayObj.forEach(changeContent);
}

function showItems (item){
    //console.log(item.menu);
    let li = document.createElement("li");
    li.textContent = item.menu;
    li.addEventListener("click",clickItem);
    document.querySelector(".menu").insertAdjacentElement("beforeend",li);
}

intemsArrayObj.forEach(showItems);
