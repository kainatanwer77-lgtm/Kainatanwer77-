const names = [
  "Laptop","Mobile","Headphones","Smart Watch","Shoes","Perfume",
  "Makeup Kit","Ring","Bag","Handfree","Speaker","Power Bank",
  "Toy Car","Baby Dress","Face Wash","T-Shirt","Jeans","Keyboard",
  "Mouse","Necklace"
];

// AUTO PRODUCTS
const products = names.map(name => ({
  name: name,
  price: Math.floor(Math.random()*50000)+500,
  img: `https://source.unsplash.com/300x200/?${name}`
}));

// SHOW PRODUCTS
function showProducts(list){
  let container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p=>{
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p>Rs. ${p.price}</p>
      </div>
    `;
  });
}

showProducts(products);

// AI SEARCH
function aiSearch(){
  let input = document.getElementById("search").value.toLowerCase();
  let box = document.getElementById("suggestions");

  if(input === ""){
    box.innerHTML = "";
    showProducts(products);
    return;
  }

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(input)
  );

  showProducts(filtered);

  // suggestions
  box.innerHTML = "";
  filtered.slice(0,5).forEach(p=>{
    box.innerHTML += `
      <div class="suggest-item" onclick="selectProduct('${p.name}')">
        🔍 ${p.name}
      </div>
    `;
  });
}

// SELECT
function selectProduct(name){
  document.getElementById("search").value = name;
  document.getElementById("suggestions").innerHTML = "";

  let result = products.filter(p => p.name === name);
  showProducts(result);
}
