//https://kea-alt-del.dk/t7/api/products/1529
console.log("product.js");

async function getProduct() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products/1529");
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

function showProduct(product) {
  document.querySelector(".purchaseBox h3").textContent =
    product.productdisplayname;
  document.querySelector(".purchaseBox .brand").textContent = product.brandname;

  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

getProduct();
