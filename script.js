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

// SAVE DATA
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// KEEP ONLY LAST 30
orders.push(order);
orders = orders.slice(-30);

localStorage.setItem("orders", JSON.stringify(orders));

// SHOW INVOICE
document.getElementById("invoice").innerHTML = `
<h2>Invoice</h2>
<p>Name: ${name}</p>
<p>Total: Rs ${total}</p>
<p>Date: ${date}</p>
`;

// LOAD HISTORY
loadHistory();
}

// LOAD HISTORY
function loadHistory(){
let orders = JSON.parse(localStorage.getItem("orders")) || [];

let html = "";

orders.reverse().forEach(o=>{
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

// ANIMATION
window.onload = function(){
document.querySelectorAll(".product").forEach((p,i)=>{
p.style.opacity = 0;
setTimeout(()=>{
p.style.transition="1s";
p.style.opacity=1;
}, i*300);
});

loadHistory();
}
