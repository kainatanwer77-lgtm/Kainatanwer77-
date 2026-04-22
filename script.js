function toggleMenu(){
let s = document.getElementById("sidebar");
s.style.left = (s.style.left === "0px") ? "-250px" : "0px";
}

// slider
let slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(()=>{
slides[i].classList.remove("active");
i = (i + 1) % slides.length;
slides[i].classList.add("active");
},3000);

// products auto
let products = [
{name:"Laptop", price:50000},
{name:"Mobile", price:40000},
{name:"Headphones", price:2500},
{name:"Watch", price:4500},
{name:"Shoes", price:3500},
{name:"Perfume", price:2500}
];

let container = document.getElementById("products");

products.forEach(p=>{
container.innerHTML += `
<div class="card">
<img src="https://picsum.photos/300/200?random=${Math.random()}">
<h3>${p.name}</h3>
<p class="price">Rs. ${p.price}</p>
<button onclick="alert('Added')">Add to Cart</button>
</div>
`;
});
