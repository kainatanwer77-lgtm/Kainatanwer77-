DROP DATABASE IF EXISTS online_ordering;
CREATE DATABASE online_ordering;
USE online_ordering;
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price INT
);
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100),
    product_name VARCHAR(100),
    price INT,
    quantity INT,
    total INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO products (name, price) VALUES
('Laptop', 2500),
('Mobile', 1800),
('Headphones', 700);
