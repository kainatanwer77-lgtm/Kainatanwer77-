const list = document.getElementById("product-list");
const search = document.getElementById("search");

let cart = [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

function displayProducts(items) {
  list.innerHTML = "";
  items.forEach(p => {
    list.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h4>${p.name}</h4>
        <p>Rs. ${p.price}</p>
        <button onclick="addToCart(${p.id})">Add</button>
      </div>
    `;
  });
}

displayProducts(products);

// 🔍 SEARCH
search.addEventListener("keyup", () => {
  let value = search.value.toLowerCase();
  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});

// 🛒 CART
function addToCart(id) {
  let item = products.find(p => p.id === id);
  cart.push(item);
  alert("Added to cart");
}

// 📦 ORDER
function viewCart() {
  let total = cart.reduce((sum, p) => sum + p.price, 0);
  if (cart.length === 0) return alert("Cart empty");

  let order = {
    items: cart,
    total: total,
    date: new Date().toLocaleString()
  };

  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  cart = [];
  alert("Order placed!");
}

// 📜 ORDER HISTORY (30 days)
function viewOrders() {
  let last30 = orders.filter(o => {
    let d = new Date(o.date);
    let now = new Date();
    return (now - d) <= (30 * 24 * 60 * 60 * 1000);
  });

  console.log(last30);
  alert("Check console for orders");
}

// CATEGORY
function showCategory(cat) {
  let filtered = products.filter(p => p.category === cat);
  displayProducts(filtered);
}

function showAll() {
  displayProducts(products);
}
