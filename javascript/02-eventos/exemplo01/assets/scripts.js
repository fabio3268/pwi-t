const button = document.querySelector("button");
const div = document.querySelector("div");
let cont = 0;

function editButton ()
{
  button.textContent = "Fábio Santos";
}

function contClick ()
{
  //cont++; //contClick = contClick + 1;
  button.textContent = `Você clicou ${++cont} vezes`;
  div.textContent = `Contador: ${cont}`;
}

button.addEventListener("click",contClick);
