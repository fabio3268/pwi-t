let productList = [];
// 1)
const inputProduct = document.querySelector("#productName");
const inputPrice = document.querySelector("#productPrice");
const button = document.querySelector("button");
// 3)
function insertProduct () {
    console.log(inputProduct.value, inputPrice.value );
    let product = {
        name : inputProduct.value,
        price : parseFloat(inputPrice.value)
    };
    productList.push(product);
    console.log(productList);
}

// 2)
button.addEventListener("click",insertProduct);

inputProduct.addEventListener("input", () => {
    console.log(inputProduct.value);
});


