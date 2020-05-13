<?php

$dir = "../resources/img/static_resources";
//扫描文件夹
$file = scandir($dir);
//显示
echo json_encode($file);