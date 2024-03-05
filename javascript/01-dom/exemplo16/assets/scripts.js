


document.querySelectorAll("#menu li").forEach((item) => {
    item.addEventListener("click",() => {
        document.querySelectorAll("#menu li").forEach((item) => {
            if(item.classList.contains("active")){
                item.classList.remove("active");
            }
        });
        item.classList.add("active");
    });
});
