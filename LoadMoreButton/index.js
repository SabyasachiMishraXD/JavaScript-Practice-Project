let api_images = document.getElementById("api-images");
let load_more = document.getElementById("load-more");

let products = [];
let currentIndex = 0;
const productsPerLoad = 10;

async function fetchList() {
  let imag = await fetch("https://dummyjson.com/products");
  let res = await imag.json();
  //   console.log(res);
  products = res.products;
  displayProducts();
}
function displayProducts() {
  api_images.innerHTML = "";
  let visibleProducts = products.slice(0, currentIndex + productsPerLoad);
  // console.log(productList);
  visibleProducts.forEach(function (product) {
    let prod_container = document.createElement("div");
    let prod_title = document.createElement("p");
    let prod_image = document.createElement("img");
    let prod_description = document.createElement("p");
    let prod_price = document.createElement("p");

    prod_title.textContent = product.title;
    prod_image.src = product.images;
    prod_image.setAttribute("height", "100px");
    prod_image.setAttribute("width", "100px");
    prod_description.textContent = product.description;
    prod_price.textContent = "$" + product.price;

    prod_container.appendChild(prod_title);
    prod_container.appendChild(prod_image);
    prod_container.appendChild(prod_description);
    prod_container.appendChild(prod_price);

    api_images.appendChild(prod_container);
  });
  updateButtonState();
}
fetchList();
function updateButtonState() {
  if (currentIndex + productsPerLoad >= products.length) {
    load_more.textContent = "Load Less";
  } else {
    load_more.textContent = "Load More";
  }
}

load_more.addEventListener("click", function () {
  if (currentIndex + productsPerLoad >= products.length) {
    currentIndex = 0;
    displayProducts();
  } else {
    currentIndex = currentIndex + productsPerLoad;
    displayProducts();
  }
});
