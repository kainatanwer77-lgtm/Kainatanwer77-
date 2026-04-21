<?php
$conn = mysqli_connect("localhost", "root", "", "online_ordering");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
