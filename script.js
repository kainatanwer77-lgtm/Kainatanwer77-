// MENU
function toggleMenu(){
let s = document.getElementById("sidebar");
s.style.left = (s.style.left === "0px") ? "-250px" : "0px";
}

// SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(()=>{
slides[index].classList.remove("active");
index = (index + 1) % slides.length;
slides[index].classList.add("active");
},3000);

// AUTO PRODUCTS (NO IMAGE UPLOAD NEEDED)
const products = [
  {name:"Watch", price:4500},
  {name:"Perfume", price:2500},
  {name:"Shoes", price:3500},
  {name:"Wallet", price:1500},
  {name:"Mobile", price:40000},
  {name:"Laptop", price:50000},
  {name:"Headphones", price:2500},
  {name:"Bag", price:1800},
  {name:"Ring", price:1200},
  {name:"Makeup", price:3000}
];

let container = document.getElementById("products");

products.forEach(p=>{
container.innerHTML += `
<div class="card">
<img src="https://source.unsplash.com/300x200/?${p.name}">
<h3>${p.name}</h3>
<p class="price">Rs. ${p.price}</p>
<button>Add to Cart</button>
</div>
`;
});
