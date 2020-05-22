<?php
    include('connect.php');
    mysqli_set_charset($conn,"utf8");
    $sql = "SELECT * FROM gallery ORDER BY time";
    $result = $conn->query($sql);
    $array = array();
    while($row = mysqli_fetch_assoc($result)) {
        $array[] = $row;
    }
    print(json_encode($array));