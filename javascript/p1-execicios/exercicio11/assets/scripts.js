const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const buttonInsert = document.querySelector("button");
let productList = [];

function insertProduct () {
    //console.log(productName.value, productPrice.value);
    let newProduct = {
        name : productName.value,
        price : parseInt(productPrice.value)
    }
    productList.push(newProduct);
    console.log(productList);
}

buttonInsert.addEventListener("click",insertProduct);
