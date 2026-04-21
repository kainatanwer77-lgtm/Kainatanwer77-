<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kainat Store</title>

<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

</head>
<body>

<!-- 🔝 TOP BAR -->
<div class="topbar">
  Welcome to Kainat Store | Premium Collection
</div>

<!-- 🔥 HEADER -->
<header>
  <div class="menu-icon" onclick="openMenu()">☰</div>
  <h1>Kainat Store</h1>
  <div class="icons">
    <i class="fa fa-search"></i>
    <i class="fa fa-shopping-bag"></i>
  </div>
</header>

<!-- 📱 SIDEBAR -->
<div id="sidebar" class="sidebar">
  <div class="sidebar-header">
    <h2>Kainat Store</h2>
    <span onclick="closeMenu()">✖</span>
  </div>

  <p class="intro-text">
    Premium quality products with trusted service.
  </p>

  <ul>
    <li>🏠 Home</li>
    <li>🛍 Products</li>
    <li>📦 My Orders</li>
    <li>❤️ Wishlist</li>
    <li>📞 Contact</li>
  </ul>
</div>

<!-- 🎬 SLIDER -->
<div class="slider">
  <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da" class="slide active">
  <img src="https://images.unsplash.com/photo-1607083206968-13611e3d76db" class="slide">
  <img src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0" class="slide">
</div>

<!-- 💎 INTRO -->
<section class="intro">
  <h1>Welcome to Kainat Store</h1>
  <p>Your one-stop shop for premium products.</p>
</section>

<!-- 🛒 PRODUCTS -->
<section class="products">

  <h2>Our Products</h2>

  <div class="product-grid">

    <div class="card">
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30">
      <h3>Luxury Watch</h3>
      <p>Premium stylish watch</p>
      <h4>Rs. 4500</h4>
      <button>Add to Cart</button>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad">
      <h3>Gold Perfume</h3>
      <p>Luxury fragrance</p>
      <h4>Rs. 2500</h4>
      <button>Add to Cart</button>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519">
      <h3>Shoes</h3>
      <p>Comfortable & stylish</p>
      <h4>Rs. 3200</h4>
      <button>Add to Cart</button>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa">
      <h3>Wallet</h3>
      <p>Premium leather</p>
      <h4>Rs. 1800</h4>
      <button>Add to Cart</button>
    </div>

  </div>

</section>

<!-- WhatsApp -->
<a href="https://wa.me/92XXXXXXXXXX" class="whatsapp">
  <i class="fa-brands fa-whatsapp"></i>
</a>

<script src="script.js"></script>

</body>
</html>
