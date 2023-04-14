const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const result = document.querySelector("#result");
const sum01 = document.querySelector("#sum01");
const sum02 = document.querySelector("#sum02");
const resultSum = document.querySelector("#resultSum");

console.log(n1.value, n2.value);

function calc ()
{
    let r = parseInt(n1.value) * parseInt(n2.value);
    if(isNaN(r)){
        result.textContent = "Erro!";
    }
    else {
        result.textContent = r;
    }
}

function calcSum ()
{
    let r = parseInt(sum01.value) + parseInt(sum02.value);
    if(isNaN(r)){
        resultSum.textContent = "Erro!";
    }
    else {
        resultSum.textContent = r;
    }
}

n1.addEventListener("input",calc);
n2.addEventListener("input",calc);

sum01.addEventListener("input",calcSum);
sum02.addEventListener("input",calcSum);
