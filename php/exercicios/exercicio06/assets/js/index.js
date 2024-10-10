console.log("OI");

document.querySelector("#list-categories").addEventListener("click", (event) => {
    if(event.target.tagName === "A") {
        console.log(event.target.getAttribute("id-category"));
    }
});
