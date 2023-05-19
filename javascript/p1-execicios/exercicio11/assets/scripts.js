let productList = [];
const inputProduct = document.querySelector("#productName");
const inputPrice = document.querySelector("#productPrice");
const button = document.querySelector("button");

function insertProduct () {
  console.log(inputProduct.value, inputPrice.value );
  let product = {
      name : inputProduct.value,
      price : parseFloat(inputPrice.value)
  };
  productList.push(product);
  console.log(productList);
}

button.addEventListener("click",insertProduct);
