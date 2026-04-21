function generateInvoice(){

let name = document.getElementById("name").value;
let laptop = document.getElementById("laptop").value || 0;
let mobile = document.getElementById("mobile").value || 0;
let headphones = document.getElementById("headphones").value || 0;

let total = (laptop*50000) + (mobile*40000) + (headphones*2500);

let date = new Date().toLocaleString();

let order = {
    name,
    laptop,
    mobile,
    headphones,
    total,
    date
};

// SAVE DATA (LocalStorage)
let orders = JSON.parse(localStorage.getItem("orders")) || [];
orders.push(order);
localStorage.setItem("orders", JSON.stringify(orders));

// SHOW INVOICE
document.getElementById("invoice").innerHTML = `
<h2>Invoice</h2>
<p>Name: ${name}</p>
<p>Total: Rs ${total}</p>
<p>Date: ${date}</p>
`;

loadHistory();
}

// LOAD HISTORY
function loadHistory(){
let orders = JSON.parse(localStorage.getItem("orders")) || [];

let html = "";

orders.slice(-30).reverse().forEach(o=>{
html += `
<div>
<p>${o.name} - Rs ${o.total}</p>
<small>${o.date}</small>
</div>
<hr>
`;
});

document.getElementById("history").innerHTML = html;
}

loadHistory();
