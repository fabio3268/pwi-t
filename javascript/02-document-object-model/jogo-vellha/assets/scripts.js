const pos = document.querySelectorAll(".pos");
let play = 'X';

let score = {
    player01: "",
    player02: "",
    score01: 0,
    score02: 0
};

window.addEventListener("load",() => {
    if(localStorage.getItem("score")){
        score = JSON.parse(localStorage.getItem("score"));
        document.querySelector("#play01").value = score.player01;
        document.querySelector("#play02").value = score.player02;
        document.querySelector("#scorePlay01").innerHTML = score.score01;
        document.querySelector("#scorePlay02").innerHTML = score.score02;
        console.log(score);
    }
});

document.querySelector("#play01").addEventListener("blur", () => {
    score.player01 = document.querySelector("#play01").value;
    localStorage.setItem("score",JSON.stringify(score));
    console.log(score);
});

document.querySelector("#play02").addEventListener("blur", () => {
    score.player02 = document.querySelector("#play02").value;
    localStorage.setItem("score",JSON.stringify(score));
    console.log(score);
});

function winner (bord, pos01, pos02, pos03,play){
    if(bord[pos01].innerHTML !== "" &&
        (bord[pos01].innerHTML === bord[pos02].innerHTML &&
            bord[pos02].innerHTML === bord[pos03].innerHTML )){
        if(play === "X" ){
            const win = document.querySelector("#play01").value;
            document.querySelector(".winner").innerHTML = `Venceu - O - ${win}!`;
            score.score01++;
            document.querySelector("#scorePlay01").innerHTML = score.score01;
        } else {
            const win = document.querySelector("#play02").value;
            document.querySelector(".winner").innerHTML = `Venceu - X - ${win}!`;
            score.score02++;
            document.querySelector("#scorePlay02").innerHTML = score.score02;
        }
    }
    localStorage.setItem("score",JSON.stringify(score));
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

document.querySelector("#resetScore").addEventListener("click", () => {
    score.score01 = 0;
    score.score02 = 0;
    localStorage.setItem("score",JSON.stringify(score));
    document.querySelector("#scorePlay01").innerHTML = 0;
    document.querySelector("#scorePlay02").innerHTML = 0;
});