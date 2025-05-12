<?php
    //QR 2.4
    //$db = new mysqli("produkcja.elgor.com.pl", "produkcja_przewody", "1MG8tWGCWf5NdD", "produkcja_przewody");
    $db = new mysqli("localhost", "root", "", "qr");

    $ilosc;$sum=0;$czas;$ilosc;
    $czasy = array();
    //Pobiera Ilosc i czas najnowszego depozytu materiału 
    $sql = "SELECT Ilosc, Czas FROM `depositqr` WHERE Nr_Materialu = ? ORDER BY Czas DESC LIMIT 1 ";
    $stmt = $db->prepare($sql);
    $stmt->bind_param("d", $_GET['q']);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($ilosc,$czas);
    $stmt->fetch();
    $stmt->close();

    //Pobiera Ilosc i czas requestów tego samego materiału nowszych od najnowszego depozytu
    $sql2 = "SELECT sum(Ilosc) as suma FROM `requestqr` WHERE Nr_Materialu = ? AND Czas > ?";
    $stmt2 = $db->prepare($sql2);
    $stmt2->bind_param("ds", $_GET['q'], $czas);
    $stmt2->execute();
    $stmt2->bind_result($suma);
    $stmt2->fetch();
    $stmt2->close();

    $remain = $ilosc-$suma;
    $remain = round($remain,2);
    echo $remain;
    //echo $czas
    
?>
