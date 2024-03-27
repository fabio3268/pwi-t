



const teams = [
    "Internacional",
    "Grêmio",
    "Juventude",
    "Caxias",
    "Brasil de Pelotas",
    "Ipiranga de Erechim"
];

console.log(teams);

for(let i = 0; i < teams.length; i++){
    //console.log(`${i} => ${teams[i]}`);
    const div = document.createElement("div");
    div.textContent = teams[i];
    div.setAttribute("class","teams");
    console.log(div);
    document.querySelector("body").insertAdjacentElement(
        "beforeend",div
    );
}
