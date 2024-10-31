const listProducts = document.querySelector("#list-products");
document.querySelector("#list-categories").addEventListener("click", (event) => {
    if(event.target.tagName === "A") {
        const categoryId = event.target.getAttribute("id-category");
        fetch(`api/get-products-by-category.php?category_id=${categoryId}`)
            .then((response) => {
                response.json()
                    .then((products) => {
                        console.log(products.data);
                        listProducts.innerHTML = "";
                        products.data.forEach((product) => {
                            const liProduct = document.createElement("li");
                            liProduct.textContent = `Id: ${product.id}, Name: ${product.name}, Price: R$ ${product.price}`;
                            listProducts.appendChild(liProduct);
                        });
                    });
            });
    }
});

const selectCategories = document.querySelector("#list-categories");

fetch("api/get-categories.php", {method: "get"})
    .then((response) => {
        response.json()
            .then((categories) => {
                //console.log(categories.data);
                categories.data.forEach((categoy) => {
                    const li = document.createElement("li");
                    li.innerHTML = `<a href="#" id-category="${categoy.id}">${categoy.name}</a>`;
                    selectCategories.appendChild(li);
                });
            });
    });

// URLSearchParams

const formSearch = document.querySelector(".search-form");
const inputSearch = document.querySelector("#search-product");

formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    const params = {
        search : inputSearch.value
    }
    const urlParams =  new URLSearchParams(params);
    const url = `api/get-product-by-name.php?${urlParams.toString()}`;
    console.log(url);
    fetch(url)
        .then((response) => {
            response.json()
                .then((products) => {
                    console.log(products);
                });
        });
});
