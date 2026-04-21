const products = [
  {name:"Laptop",price:50000,img:"https://picsum.photos/200?1"},
  {name:"Mobile",price:40000,img:"https://picsum.photos/200?2"},
  {name:"Headphones",price:2500,img:"https://picsum.photos/200?3"},
  {name:"Watch",price:3000,img:"https://picsum.photos/200?4"},
  {name:"Makeup Kit",price:2000,img:"https://picsum.photos/200?5"},
  {name:"Jewelry",price:3500,img:"https://picsum.photos/200?6"},
  {name:"Kids Toys",price:1500,img:"https://picsum.photos/200?7"},
  {name:"Handsfree",price:1200,img:"https://picsum.photos/200?8"}
];

let cart = [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// SHOW PRODUCTS
function showHome(){
 let html="";
 products.forEach((p,i)=>{
  html += `
  <div class="card">
    <img src="${p.img}">
    <h4>${p.name}</h4>
    <p class="price">Rs ${p.price}</p>
    <button onclick="add(${i})">Add</button>
  </div>`;
 });
 document.getElementById("products").innerHTML = html;
 document.getElementById("invoice").innerHTML = "";
}

// ADD CART
function add(i){
 cart.push(products[i]);
 alert("Added");
}

// CART VIEW
function showCart(){
 let total=0, html="";
 cart.forEach(p=>{
  total+=p.price;
  html += `<p>${p.name} - Rs ${p.price}</p>`;
 });

 html += `<h3>Total: Rs ${total}</h3>
 <button onclick="checkout()">Checkout</button>`;

 document.getElementById("products").innerHTML = html;
}

// CHECKOUT + SAVE
function checkout(){
 let name = document.getElementById("name").value;
 let phone = document.getElementById("phone").value;

 if(!name || !phone){
  alert("Enter Name & Phone");
  return;
 }

 let total = cart.reduce((a,b)=>a+b.price,0);

 let order = {
  id: Date.now(),
  name,
  phone,
  items: cart,
  total,
  date: new Date().toLocaleString()
 };

 orders.push(order);
 localStorage.setItem("orders", JSON.stringify(orders));

 cart = [];
 alert("Order Saved");
 showHome();
}

// ORDER HISTORY
function showOrders(){
 let html="<h3>Orders</h3>";

 orders.forEach(o=>{
  html += `
  <div class="card">
    <p>${o.name} (${o.phone})</p>
    <p>Rs ${o.total}</p>
    <button onclick="invoice(${o.id})">Invoice</button>
  </div>`;
 });

 document.getElementById("products").innerHTML = html;
}

// INVOICE
function invoice(id){
 let o = orders.find(x=>x.id===id);

 let html = `
 <h2>🧾 Invoice</h2>
 <p>Name: ${o.name}</p>
 <p>Phone: ${o.phone}</p>
 <hr>`;

 o.items.forEach(p=>{
  html += `<p>${p.name} - Rs ${p.price}</p>`;
 });

 html += `<h3>Total: Rs ${o.total}</h3>`;

 document.getElementById("invoice").innerHTML = html;
}

// AUTO LOAD
showHome();
