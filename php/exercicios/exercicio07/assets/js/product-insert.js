console.log("OI INSERT");

const formInsertProduct = document.querySelector("#form-product-insert");

formInsertProduct.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("api/product-insert.php", {
        method: "post",
        body: new FormData(formInsertProduct)
    })
        .then((response) => {
            response.json()
                .then((product) => {
                    console.log(product)
                });
        });
});