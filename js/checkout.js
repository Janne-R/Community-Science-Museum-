const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let total = 0;
cartItems.forEach(function (cartElement) {
  total += cartElement.price;
  cartContainer.innerHTML +=
    `
  <div class="cart-item">
  <p>${cartElement.name}</p>
  <p>Price $: ${cartElement.price},-</p>
  </div>
  `
})
totalContainer.innerHTML = `<h2>Total $: ${total},-</h2>`;