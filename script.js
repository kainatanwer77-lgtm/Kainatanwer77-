const products = [
  {name:"Laptop", price:50000, category:"electronics", img:"https://via.placeholder.com/150"},
  {name:"Mobile", price:40000, category:"electronics", img:"https://via.placeholder.com/150"},
  {name:"Headphones", price:2500, category:"electronics", img:"https://via.placeholder.com/150"},
  
  {name:"Lipstick", price:500, category:"cosmetics", img:"https://via.placeholder.com/150"},
  {name:"Face Wash", price:800, category:"cosmetics", img:"https://via.placeholder.com/150"},
  
  {name:"Kids Toy Car", price:1200, category:"kids", img:"https://via.placeholder.com/150"},
  {name:"Baby Dress", price:1500, category:"kids", img:"https://via.placeholder.com/150"},

  {name:"Gold Ring", price:20000, category:"jewelry", img:"https://via.placeholder.com/150"},
  {name:"Necklace", price:5000, category:"jewelry", img:"https://via.placeholder.com/150"},

  {name:"T Shirt", price:1200, category:"fashion", img:"https://via.placeholder.com/150"},
  {name:"Shoes", price:3000, category:"fashion", img:"https://via.placeholder.com/150"},

  // AUTO GENERATE MORE PRODUCTS
  ...Array.from({length:40}, (_,i)=>({
    name:"Product "+(i+1),
    price:Math.floor(Math.random()*5000)+500,
    category:["electronics","cosmetics","kids","jewelry","fashion"][i%5],
    img:"https://via.placeholder.com/150"
  }))
];

function displayProducts(list){
  const container = document.getElementById("productList");
  container.innerHTML = "";

  list.forEach(p=>{
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p class="price">Rs. ${p.price}</p>
      </div>
    `;
  });
}

function filterProducts(category){
  if(category==="all"){
    displayProducts(products);
  } else {
    const filtered = products.filter(p=>p.category===category);
    displayProducts(filtered);
  }
}

displayProducts(products);
