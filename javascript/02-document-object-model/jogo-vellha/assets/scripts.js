const pos = document.querySelectorAll(".pos");
let play = 'X';

pos.forEach((e) => {
    console.log(e);
    e.addEventListener("click", () => {
        e.innerHTML = play;
        if(play === 'X'){
            play = 'O';
        } else {
            play = 'X';
        }
    });
});

document.querySelector(".reset").addEventListener("click", () => {
    document.querySelectorAll(".pos").forEach((e) => {
        e.innerHTML = "";
    });
});
