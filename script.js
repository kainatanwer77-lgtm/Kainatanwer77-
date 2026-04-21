const products = [
  {name:"Laptop", price:50000, img:"https://via.placeholder.com/150?text=Laptop"},
  {name:"Mobile", price:40000, img:"https://via.placeholder.com/150?text=Mobile"},
  {name:"Watch", price:3500, img:"https://via.placeholder.com/150?text=Watch"},
  {name:"Headphones", price:2500, img:"https://via.placeholder.com/150?text=Headphones"},
  {name:"Shoes", price:3000, img:"https://via.placeholder.com/150?text=Shoes"},
  {name:"Perfume", price:1500, img:"https://via.placeholder.com/150?text=Perfume"},
  {name:"Makeup Kit", price:4000, img:"https://via.placeholder.com/150?text=Makeup"},
  {name:"Ring", price:7000, img:"https://via.placeholder.com/150?text=Ring"},
  {name:"Bag", price:2200, img:"https://via.placeholder.com/150?text=Bag"},
  {name:"Handfree", price:1800, img:"https://via.placeholder.com/150?text=Handfree"},
  {name:"Speaker", price:3000, img:"https://via.placeholder.com/150?text=Speaker"},
  {name:"Power Bank", price:2500, img:"https://via.placeholder.com/150?text=PowerBank"},
  {name:"Toy", price:1200, img:"https://via.placeholder.com/150?text=Toy"},
  {name:"Baby Dress", price:1800, img:"https://via.placeholder.com/150?text=Baby"},
  {name:"Face Wash", price:500, img:"https://via.placeholder.com/150?text=Facewash"},
  {name:"T-Shirt", price:900, img:"https://via.placeholder.com/150?text=Clothes"},
  {name:"Jeans", price:2000, img:"https://via.placeholder.com/150?text=Jeans"},
  {name:"Keyboard", price:1500, img:"https://via.placeholder.com/150?text=Keyboard"},
  {name:"Mouse", price:700, img:"https://via.placeholder.com/150?text=Mouse"},
  {name:"Necklace", price:4500, img:"https://via.placeholder.com/150?text=Jewelry"}
];

function displayProducts(list){
  let container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>Rs. ${p.price}</p>
      </div>
    `;
  });
}

displayProducts(products);

// SEARCH
function searchProduct(){
  let input = document.getElementById("search").value.toLowerCase();

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(input)
  );

  displayProducts(filtered);
}
