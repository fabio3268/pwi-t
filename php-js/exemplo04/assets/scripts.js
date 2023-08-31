
const url = "api/pessoa.php";
/*fetch(url).then(response => {
    response.json().then(people => {
        console.log(people);
        document.querySelector("div").innerHTML = `
        Nome: ${people.name} Idade ${people.age}
        `;
    });
});*/

async function myFunc() {
    const res = await fetch(url);
    //console.log(res); // resposta da requisição
    const people = await res.json(); // dados em texto
    document.querySelector("div").innerHTML = `
        Nome: ${people.name} Idade: ${people.age} Profissão: ${people.job}
        `;
}

document.querySelector("button").addEventListener("click", myFunc);
