<?php
    $server = "localhost";
    $db_username = "root";
    $db_password = "";
    $db_name = "website_data";
    $conn = new mysqli($server, $db_username, $db_password, $db_name);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }