
let play = 'X';
let control = [];
const listCells = document.querySelectorAll(".cell");

listCells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if(cell.textContent == "") {
            control[index] = play;
            cell.textContent = play;
            if(play === 'X') {
                play = 'O';
            } else {
                play = 'X';
            }
            console.log(index, control);
        }
    });

});

// RESET
document.querySelector("#reset").addEventListener("click", () => {
    listCells.forEach((cell) => {
        cell.textContent = "";
    });
    play = "X";
});

