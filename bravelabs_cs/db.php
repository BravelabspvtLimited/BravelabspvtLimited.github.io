<?php

DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_USER', '$$$');
DEFINE ('DB_PASSWORD', '$$$');
DEFINE ('DB_NAME', 'futuremed_users');

//Make Connection

$conn=@mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn)
{
    die('Did not connect to MySQL:' .mysqli_connect_error());
}
// select the database

mysqli_select_db($conn, DB_NAME);

?>