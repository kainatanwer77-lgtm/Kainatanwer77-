const products=[
{id:1,name:"Dress",price:3000,img:"https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg"},
{id:2,name:"Shirt",price:2000,img:"https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg"},
{id:3,name:"Shoes",price:5000,img:"https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg"}
];

let cart=[];

function loadProducts(){
const grid=document.getElementById("mainG");
grid.innerHTML=products.map(p=>`
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>Rs ${p.price}</p>
<button onclick="addToCart(${p.id})">Add</button>
</div>
`).join("");
}

function addToCart(id){
const item=products.find(p=>p.id===id);
cart.push(item);
updateCart();
}

function updateCart(){
document.getElementById("cBadge").innerText=cart.length;
let total=0;
cart.forEach(i=>total+=i.price);
document.getElementById("cTotal").innerText=total;
}

function openCart(){
document.getElementById("cart").style.display="block";
}

function checkout(){
alert("Order placed!");
cart=[];
updateCart();
}

window.onload=loadProducts;
