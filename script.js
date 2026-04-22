// PRODUCTS DATA
const products = [
  {id:1, name:"Embroidered Lawn Suit", price:3500, img:"https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg"},
  {id:2, name:"Formal Shirt", price:2200, img:"https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg"},
  {id:3, name:"Leather Bag", price:6500, img:"https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg"},
  {id:4, name:"Sneakers", price:4800, img:"https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg"}
];

// CART
let cart = [];

// LOAD PRODUCTS
function loadProducts(){
  const grid = document.getElementById("mainG");
  if(!grid) return;

  grid.innerHTML = products.map(p => `
    <div class="p-card">
      <img src="${p.img}">
      <div class="p-body">
        <div class="p-name">${p.name}</div>
        <div class="p-now">Rs. ${p.price}</div>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    </div>
  `).join("");
}

// ADD TO CART
function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
  alert("Item added to cart");
}

// UPDATE CART
function updateCart(){
  const count = document.getElementById("cBadge");
  const total = document.getElementById("cTotal");

  if(count) count.innerText = cart.length;

  let sum = 0;
  cart.forEach(i => sum += i.price);

  if(total) total.innerText = "Rs. " + sum;
}

// OPEN CART
function openCart(){
  document.getElementById("cartDrw").classList.add("on");
  document.getElementById("ov").classList.add("on");
}

// CLOSE CART
function closeCart(){
  document.getElementById("cartDrw").classList.remove("on");
  document.getElementById("ov").classList.remove("on");
}

// CHECKOUT
function openCheckout(){
  if(cart.length === 0){
    alert("Cart empty hai");
    return;
  }
  alert("Order placed (demo)");
  cart = [];
  updateCart();
}

// LOADER HIDE
window.onload = () => {
  loadProducts();
  setTimeout(()=>{
    const ldr = document.getElementById("ldr");
    if(ldr) ldr.style.display = "none";
  },1000);
};
