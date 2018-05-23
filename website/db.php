<?php

DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_USER', 'hirakwul_hkc');
DEFINE ('DB_PASSWORD', 'Abacus249317');
DEFINE ('DB_NAME', 'hirakwul_portfolio');

//Make Connection

$conn=@mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn)
{
    die('Did not connect to MySQL:' .mysqli_connect_error());
}
// select the database

mysqli_select_db($conn, DB_NAME);

?>