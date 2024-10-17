console.log("OI");

document.querySelector("#list-categories").addEventListener("click", (event) => {
    if(event.target.tagName === "A") {
        const categoryId = event.target.getAttribute("id-category");
        fetch(`api/get-products-by-category.php?category_id=${categoryId}`)
            .then((response) => {
                response.json()
                    .then((products) => {
                        console.log(products.data);
                    });
            });
    }
});

fetch("api/get-categories.php", {method: "get"})
    .then((response) => {
        response.json()
            .then((categories) => {
                console.log(categories.data);
            });
    });

// URLSearchParams
const params = {
    search : "Mesa de Centro"
}
const urlParams =  new URLSearchParams(params);
console.log(urlParams.toString());