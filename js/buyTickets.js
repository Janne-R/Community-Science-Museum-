import { productArray } from "./constants/productList.js";

const productsContainer = document.querySelector(".products");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let cartArrey = [];

productArray.forEach(function (product) {
  productsContainer.innerHTML +=
    `
  <div class="tickets-section">
    <div class="tickets-block">
      <div class="ticets-block-info">
        <h3>${product.name}</h2>
        <p>${product.description}</p>
      </div>
      <p>Price $: ${product.price},-</p>
      <button class="cta tickets-button" data-product="${product.id}">Add to cart</button>
    </div>
  </div>
  `
})

const buttons = document.querySelectorAll(".tickets-button");
buttons.forEach(function (button) {
  button.onclick = function (event) {
    const itemToAdd = productArray.find(item => item.id === event.target.dataset.product);
    cartArrey.push(itemToAdd);
    showCart(cartArrey);
    localStorage.setItem("cartList", JSON.stringify(cartArrey));
  }
})

function showCart(cartItems) {
  cart.style.display = "block";
  cartList.innerHTML = "";
  let total = 0;
  cartItems.forEach(function (cartElement) {
    total += cartElement.price;
    cartList.innerHTML +=
      `
    <div class="cart-item">
    <h4>${cartElement.name}</h4>
    <p>Price $: ${cartElement.price},-</p>
    </div>
    `
  })
  totalContainer.innerHTML = `Total $: ${total},-`;
}