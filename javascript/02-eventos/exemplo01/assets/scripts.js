


const buttonClick = document.querySelector(".click");
const buttonReset = document.querySelector(".reset");
const divCount = document.querySelector("div");
var count = 0;
function changeText () {
    count++;
    if(count % 2 == 0) {
        buttonClick.textContent = "Click PAR";
    } else {
        buttonClick.textContent = "Click IMPAR";
    }
    console.log(count);
    divCount.textContent = `Contador: ${count}`;
}

buttonClick.addEventListener("click",changeText);

buttonReset.addEventListener("click", () => {
    count = 0;
    divCount.textContent = `Contador: ${count}`;
});