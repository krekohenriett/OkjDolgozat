<?php

require './MySqlDB.php';

$mySql = new MySqlDB();
$adat=$_GET['todo'];

$adatok = array();
$result = $mySql->lekerdez("adatok", "todo like '%".$adat."%'");


if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {

        $adatok[] = $row;
    }
    echo json_encode($adatok);
} else {
    echo "0 results";
}


