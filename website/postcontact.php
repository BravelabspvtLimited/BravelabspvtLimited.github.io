<?php
include("db.php");
$pagename="Contact Confirmed";



$fname=$_POST['name'];

$email=$_POST['email'];


//$message=$_POST['message'];
//$inmessage=mysqli_real_escape_string($conn, $message);




$SQLB="insert into futuremed
        (Name, Email)
            values
            ('".$fname."', '".$email."')";
        
$exeSQLB=mysqli_query($conn, $SQLB) or die(mysqli_error($conn));
include ('thankscontact.html');


?>