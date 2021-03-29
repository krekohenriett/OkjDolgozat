<?php

require './MySqlDB.php';

if($_SERVER['REQUEST_METHOD']==="DELETE"){
$mySql=new MySqlDB();
$id=$_GET['ID'];
$mySql->torol("okjdolg","ID=".$id);

$id=$adatom["ID"];
$todo=$adatom["todo"];
$datum=$adatom["datum"];
$allapot=$adatom["allapot"];

$updateString="id='".$id."',nev='".$nev."',tel='".$tel."',kep='".$kep."'";
$mySql->frissit("telefonkonyvem",updateString, "ID=".$id);
}