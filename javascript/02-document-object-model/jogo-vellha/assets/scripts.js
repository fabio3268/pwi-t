const pos = document.querySelectorAll(".pos");
let play = 'X';

function winner (bord, pos01, pos02, pos03,play){
    if(bord[pos01].innerHTML !== "" &&
        (bord[pos01].innerHTML === bord[pos02].innerHTML &&
            bord[pos02].innerHTML === bord[pos03].innerHTML )){
        if(play === "X" ){
            const win = document.querySelector("#play01").value;
            document.querySelector(".winner").innerHTML = `Venceu - O - ${win}!`;
        } else {
            const win = document.querySelector("#play02").value;
            document.querySelector(".winner").innerHTML = `Venceu - X - ${win}!`;
        }
    }
}

pos.forEach((e,i, bord) => {
    e.addEventListener("click", () => {
        e.innerHTML = play;
        console.log(`pos ${i} - ${bord[i].innerHTML}`);

        if(play === 'X'){
            play = 'O';
        } else {
            play = 'X';
        }

        winner(bord,0,1,2,play);
        winner(bord,3,4,5,play);
        winner(bord,6,7,8,play);
        winner(bord,0,3,6,play);
        winner(bord,1,4,7,play);
        winner(bord,2,5,8,play);
        winner(bord,2,4,6,play);
        winner(bord,0,4,8,play);
    });
});

document.querySelector(".reset").addEventListener("click", () => {
    document.querySelectorAll(".pos").forEach((e) => {
        e.innerHTML = "";
    });
    document.querySelector(".winner").innerHTML = "";
});
