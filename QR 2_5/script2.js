//QR 2.4
let pracownik = document.querySelectorAll("#pracownikID")[0];
let zlecenie = document.querySelectorAll("#zlecenieID")[0];
let material = document.querySelectorAll("#matID")[0];
let form = document.querySelectorAll("#form")[0];
let form2 = document.querySelectorAll("#form")[1];
let STATUS = document.querySelectorAll("#STATUS")[0];
let MAT_Q = document.querySelectorAll("#MAT_Q")[0];
let MAT_QV;
let ilosc = document.querySelectorAll("#ilosc")[0];
let jednostka = document.querySelectorAll("#Jednostki")[0];

const car_1 = document.getElementById("car_1")

//Sprawdza w którym dokumencie jest wykonywany
let DOC = 1;
function set_doc(e){
    setTimeout(()=> {
        if(car_1.classList.contains('active')){
            DOC = 1
            pracownik = document.querySelectorAll("#pracownikID")[0];
            zlecenie = document.querySelectorAll("#zlecenieID")[0];
            material = document.querySelectorAll("#matID")[0];
            form = document.querySelectorAll("#form")[0];
            STATUS = document.querySelectorAll("#STATUS")[0];
            MAT_Q = document.querySelectorAll("#MAT_Q")[0];
            ilosc = document.querySelectorAll("#ilosc")[0];
            jednostka = document.querySelectorAll("#Jednostki")[0];
            GET_MAT(material.value)
        }else{
            DOC = 0;
            pracownik = document.querySelectorAll("#pracownikID")[1];
            zlecenie = document.querySelectorAll("#zlecenieID")[1];
            material = document.querySelectorAll("#matID")[1];
            form = document.querySelectorAll("#form")[1];
            STATUS = document.querySelectorAll("#STATUS")[1];
            MAT_Q = document.querySelectorAll("#MAT_Q")[1];
            ilosc = document.querySelectorAll("#ilosc")[1];
            jednostka = document.querySelectorAll("#Jednostki")[1];
            GET_MAT(material.value)
        }
        tekst="";
    },800);
    e.blur();
}

//Żeby formularz nie wywalił
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
form2.addEventListener('submit', handleForm);
//Sprawdza ile zostało materiału i wysyła odpowiedź do formularza (getmat2.php) [Czeka żeby baza nadążyła]
function GET_MAT(mat){
    setTimeout(function() {
        var mat_req;
        if (mat == "") {
            MAT_Q.value = "";
            return;
        }
        mat_req = new XMLHttpRequest();
        mat_req.onreadystatechange  =function(){
            if (this.readyState == 4 && this.status == 200) {
                MAT_Q.value = "Pozostało "+this.responseText+"m";
                MAT_QV = this.responseText;
                }
        }    
        mat_req.open("GET", "getmat2.php?q="+mat);
        mat_req.send();
    },300);
}

///REQUEST///
//Wysyła request do bazy danych i wysyła odpowiedz do formularza(request2.php)
function GET_REQ(){
    var get_req;
    if (pracownik.value == "" ||zlecenie.value == "" ||material.value == ""||ilosc.value == "" ) {
        STATUS.value= "ERROR NIEKOMPLETNE DANE";
    }else if(MAT_QV<ilosc.value*jednostka.value){
        STATUS.value = "ZBYT DUŻA ILOŚĆ";
    }
    else{
        get_req = new XMLHttpRequest();
        get_req.onreadystatechange  =function(){
            if (this.readyState == 4 && this.status == 200) {
                STATUS.value = this.responseText;
                }
        }    
        PDATA = pracownik.value;
        MDATA = material.value;
        PDATA = PDATA.substring(0, PDATA.length - 1);
        MDATA = MDATA.substring(0, MDATA.length - 1);
        console.log(PDATA,MDATA)
        const formData = [PDATA,zlecenie.value,MDATA,jednostka.value,ilosc.value]
        console.log(formData)
        get_req.open("GET", "request2.php?q="+formData);
        get_req.send(); 
    }
    setTimeout(function() {
        let mat = material.value
        GET_MAT(mat);
    },400);
    
}
    
///DEPOSIT///
//Wysyła depozyt do bazy danych i wysyła odpowiedz do formularza(request2.php)
function GET_DEP(){
    var get_dep;
    if (pracownik.value == "" ||material.value == ""||ilosc.value == "" ) {
        window.alert("ERROR NIEKOMPLETNE DANE");
    }
    else{
        get_dep = new XMLHttpRequest();
        get_dep.onreadystatechange  =function(){
            if (this.readyState == 4 && this.status == 200) {
                STATUS.value = this.responseText;
                }
        }    
        PDATA = pracownik.value;
        MDATA = material.value;
        PDATA = PDATA.substring(0, PDATA.length - 1);
        MDATA = MDATA.substring(0, MDATA.length - 1);
        console.log(PDATA,MDATA)
        const formData = [PDATA,MDATA,jednostka.value,ilosc.value]
        get_dep.open("GET","deposit2.php?q="+formData);
        get_dep.send(); 
    }
    setTimeout(function() {
        let mat = material.value
        GET_MAT(mat);
    },400);
}

//ZCZYTYWANIE INPUT
ilosc.addEventListener("focus",()=>{
    ID = 5;
    //console.log(ilosc.value)
})
ilosc.addEventListener("blur",()=>{
    ID = 4;
})


document.addEventListener('keydown',(event)=>{
    if(ID!=5){
        if(event.key == "Enter"){
        read();
        }else if(event.key == "Shift" || event.key == "Unidentified"){
            
        }else{
            tekst += event.key;
        }
    }
    
});
//let tekst1="0263851/97/Q34#";
//console.log(/\/..\//.test(tekst1));

//OPERACJE NA MATERIAŁACH
let ID=4; let tekst="";
function read(){
    ID=4; 
    if(tekst.charAt(tekst.length-1)=="#")
    {
        if(tekst.length==9){
            ID=1;
        }else if(tekst.length<=6){
            ID=3;
        }
    }else if(/\/..\//.test(tekst)==true){
        ID=2;
        
    }
    //KTÓRY SKRYPT WYKONAĆ
    if(DOC==1)
    {   
        ///POBÓR///
        //Pracownik
        if(ID==1){
            if(pracownik.value!=""){
                pracownik.value ="";
            }
            pracownik.value = tekst;
            
        //Zlecenie
        }else if(ID==2){
            if(zlecenie.value!=""){
                zlecenie.value ="";
            }
            tekst.toUpperCase;
            zlecenie.value = tekst;
        //Material    
        }else if(ID==3){
            if(material.value!=""){
                material.value ="";
            }
            GET_MAT(tekst);
            material.value = tekst;
        }else{
            window.alert("ERROR BŁĘDNE DANE");
        }
    }else{
        ///PRZYJĘCIE///
        //Pracownik
        if(ID==1){
            if(pracownik.value!=""){
                pracownik.value ="";
            }
            pracownik.value = tekst;
        //MATERIAŁ        
        }else if(ID==3){
            if(material.value!=""){
                material.value ="";
            }
            GET_MAT(tekst);
            material.value = tekst;
            
        }else{
            window.alert("ERROR BŁĘDNE DANE");
        }
    }; 
    tekst="";
};