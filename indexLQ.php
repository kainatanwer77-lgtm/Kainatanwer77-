<?php
$invoice = null;
$error   = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['customer_name'];
    $items = array();

    if (isset($_POST['qty_laptop']) && (int)$_POST['qty_laptop'] > 0) {
        $qty = (int)$_POST['qty_laptop'];
        $items[] = array('name' => 'Laptop', 'price' => 2500, 'qty' => $qty);
    }
    if (isset($_POST['qty_phone']) && (int)$_POST['qty_phone'] > 0) {
        $qty = (int)$_POST['qty_phone'];
        $items[] = array('name' => 'Mobile', 'price' => 1800, 'qty' => $qty);
    }
    if (isset($_POST['qty_headphones']) && (int)$_POST['qty_headphones'] > 0) {
        $qty = (int)$_POST['qty_headphones'];
        $items[] = array('name' => 'Headphones', 'price' => 700, 'qty' => $qty);
    }

    if ($name == "") {
        $error = "Please enter your name.";
    } elseif (count($items) == 0) {
        $error = "Please select at least one product.";
    } else {
        $subtotal = 0;
        foreach ($items as $item) {
            $subtotal += $item['price'] * $item['qty'];
        }

        $discount = 0;
        if ($subtotal > 5000) {
            $discount = $subtotal * 0.10;
        }

        $total = $subtotal - $discount;

        $invoice = array(
            'name'     => $name,
            'datetime' => date('d M Y, h:i A'),
            'items'    => $items,
            'subtotal' => $subtotal,
            'discount' => $discount,
            'total'    => $total
        );
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Online Order System</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<!-- NAVBAR -->
<nav>
    <div class="logo">&#128722; Online Order System</div>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#shop">Order</a></li>
        <li><a href="#shop">Invoice</a></li>
    </ul>
</nav>


<!-- ==================== HOME SECTION ==================== -->
<div class="hero" id="home">
    <div class="hero-left">
        <p class="badge">Web Development Practical Task</p>
        <h1>Professional Product Order &amp;<br>Bill Generator</h1>
        <p class="hero-text">Create orders, apply discount automatically, and generate the final invoice using PHP form handling in a complete professional webpage.</p>
        <div class="hero-buttons">
            <a href="#shop" class="btn blue">&#9658; Start Order</a>
            <a href="#features" class="btn outline">&#9684; Explore Features</a>
        </div>
    </div>
    <div class="hero-right">
        <div class="stats-grid">
            <div class="stat-box">
                <span class="big-num blue-num">3</span>
                <span class="small-text">Products Available</span>
            </div>
            <div class="stat-box">
                <span class="big-num blue-num">10%</span>
                <span class="small-text">Discount Above Rs. 5000</span>
            </div>
            <div class="stat-box">
                <span class="big-num">PHP</span>
                <span class="small-text">Server-side Form Handling</span>
            </div>
            <div class="stat-box">
                <span class="big-num">UI</span>
                <span class="small-text">Modern Responsive Design</span>
            </div>
        </div>
    </div>
</div>


<!-- ==================== FEATURES SECTION ==================== -->
<div id="features">
    <div class="section-title">
        <h2>Project Features</h2>
        <p>This task combines HTML, CSS, Bootstrap, JavaScript validation, and PHP in one professional webpage.</p>
    </div>

    <div class="features-row">
        <div class="feat-box">
            <div class="feat-icon-wrap blue-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3>Responsive Layout</h3>
            <p>Modern layout using Bootstrap grid and custom CSS styling.</p>
        </div>
        <div class="feat-box">
            <div class="feat-icon-wrap blue-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            </div>
            <h3>Product Ordering</h3>
            <p>Choose products, set quantities, and submit the complete order form.</p>
        </div>
        <div class="feat-box">
            <div class="feat-icon-wrap blue-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" 
