<?php
    //QR 2.4
    //$db = new mysqli("produkcja.elgor.com.pl", "produkcja_przewody", "1MG8tWGCWf5NdD", "produkcja_przewody");
    $db = new mysqli("localhost", "root", "", "qr");

    //Pobiera stringa z danymi formularza i zmiena na array i wsadza do zmiennych
    $ARR = @$_GET['q'];
    $ARR = explode(",", $ARR);
    
    $pracownik = $ARR[0];
    $zlecenie = $ARR[1];
    $material = $ARR[2];
    $jednostka = (float)$ARR[3];
    $ilosc = (float)$ARR[4];
    $ilosc = $ilosc * $jednostka;


    //Wysyła nowy request do bazy
    $qr1 = "INSERT INTO requestqr(Nr_Pracownika, Nr_Zlecenia, Nr_materialu, Ilosc) VALUES (?,?,?,?)";
    $stmt = $db->prepare($qr1);
    $stmt->bind_param("ssid", $pracownik,$zlecenie,$material,$ilosc);
    $stmt->execute();

    //Zwraca status
    echo"SUCCESS";

    

?>