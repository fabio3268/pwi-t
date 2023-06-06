


document.querySelectorAll("#menu li").forEach((li,i,array) => {
    li.addEventListener("click", () => {
        console.log(li,i);
        const itens = document.querySelectorAll("div");
        document.querySelectorAll("div").forEach((div) => {
            div.classList.remove("active");
        });
        itens[i].classList.add("active");
    });
});
