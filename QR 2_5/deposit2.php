<?php
    //QR 2.4
    $db = new mysqli("produkcja.elgor.com.pl", "produkcja_przewody", "1MG8tWGCWf5NdD", "produkcja_przewody");
    //$db = new mysqli("localhost", "root", "", "qr");
    
    //Pobiera stringa z danymi formularza i zmiena na array i wsadza do zmiennych
    $ARR = @$_GET['q'];
    $ARR = explode(",", $ARR);
    
    $pracownik = $ARR[0].="#";
    $material = $ARR[1].="#";
    $jednostka = (float)$ARR[2];
    $ilosc = (float)$ARR[3];
    $ilosc = $ilosc * $jednostka;
    $czas = date("Y/m/d");
    
    $qr1 = "INSERT INTO depositqr(Nr_Pracownika,Nr_materialu, Ilosc) VALUES (?,?,?)";
    //Pobiera pracowników z uprawnieniami
    $qr2 ="SELECT  `Nr Pracownika` FROM `access` WHERE `Nr Pracownika` = '$pracownik'";
    $e = mysqli_query( $db, $qr2);
    $a = mysqli_num_rows($e);


    //Jeżeli pracownik ma odpowiednie uprawnienia wysyła nowy depozyt do bazy i zwraca status
    if($a!=0){
        $stmt = $db->prepare($qr1);
        $stmt->bind_param("ssd", $pracownik,$material,$ilosc);
        $stmt->execute();
        echo"SUCCESS";
    }
    else{
        echo"NIE MASZ ODPOWIEDNICH UPRAWNIEŃ";
        echo"$pracownik";
    }

?>