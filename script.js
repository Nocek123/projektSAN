let dupaaa = ""; //powinno być "admin"
let haslo111 = ""; //powinno być "1234"
let czyZalogowany = 0;
let wyszukajClick = 0;
let aircraft = "";
let flight_price = "0";

loginBtn();

document.getElementById("login-button-1").addEventListener("click",loginCheck);

document.getElementById("close_fly_window").addEventListener("click",toggleFlyWindow);

document.getElementById("login-button-1").addEventListener("click",function (){
    if (document.title === "Miejsca"){
    location.href = "index.html";
    }
});

function clickWyszukaj() {
    if (czyZalogowany === 1) {
        if (document.getElementById("startCity").value !== "" && document.getElementById("destinationCity").value !== "" && document.getElementById("startDate").value !== "" && document.getElementById("passengersNumber").value !== "") 
        {
            getValues();
            // location.href = "page2.html";
            toggleFlyWindow();
        }
    } else {
        alert("Musisz być zalogowany żeby wyszukać lot!");
    }

    document.getElementById("flight_date").innerHTML=document.getElementById("startDate").value;
    document.getElementById("flight_hour").innerHTML="17:00";
    document.getElementById("flight_city").innerHTML=document.getElementById("startCity").value;
    document.getElementById("flight_aircraft").innerHTML=`${aircraft}`;
    document.getElementById("flight_price").innerHTML="645zł";



    // wyszukajClick = 1;
    // if (czyZalogowany === 1 && document.getElementById("startCity").value !== "" && document.getElementById("destinationCity").value !== "" && document.getElementById("startDate").value !== "" && document.getElementById("startDate").value !== "passengersNumber") {
    //     getValues();
    //     location.href = "page2.html";
    // }   else {
    //     getValues();
    //     checkForm();
    // }
}

function getValues() {
    let startCity = document.getElementById("startCity").value;
    let destinationCity = document.getElementById("destinationCity").value;
    let startDate = document.getElementById("startDate").value;
    let passengersNumber = document.getElementById("passengersNumber").value;

    if (destinationCity === "Wrocław" || destinationCity === "Katowice") {
        aircraft = "EMBRAER 170"
    }
    else if ( destinationCity === "Londyn" || destinationCity === "Paryż") {
        aircraft = "BOEING 737-800"
    }
    else { aircraft = "DREAMLINER 787-8"}
    // document.getElementById("testing").innerHTML=`Miasto wylotu to: ${startCity} <br> Miasto przylotu to: ${destinationCity} <br> Data Twojego lotu to: ${startDate} <br> Liczba pasażerów to: ${passengersNumber} <br> Samolot, którym odbędzie się lot to: ${aircraft}`;
    
    localStorage.clear();
    localStorage.setItem('planeType', aircraft);
    localStorage.setItem('passengersNumb', passengersNumber);
}

function checkForm() {
    if (document.getElementById("startCity").value !== "" && document.getElementById("destinationCity").value !== "" && document.getElementById("startDate").value !== "" && document.getElementById("passengersNumber").value !== "") {
        console.log("Warunek spełniony");
        toggleLogin();
    } else {
        console.log("Warunek niespełniony");
    }
}

function toggleLogin() {
    console.log("wykonana funkcja: toggleLogin")
    if (czyZalogowany===0) {
        
        if (document.getElementById("login_window").classList.contains("visible")) {
            document.getElementById("login_window").classList.remove("visible");
            document.getElementById("shadow").classList.remove("visible");
        }
        else{
            document.getElementById("login_window").classList.add("visible");
            document.getElementById("shadow").classList.add("visible");
        }
    }
    
    else {
        document.getElementById("login_window").classList.remove("visible");
        document.getElementById("shadow").classList.remove("visible");
    }
}

function logowanie() {
    console.log("wykonana funkcja: logowanie")


    div_wyloguj = '<span class="me-3" style="color: white;"><i class="fa-solid fa-user me-2"></i>admin</span><button type="button" class="btn btn-primary btn-lg btn-login" onclick="toggleLogin()"><i class="fa-solid fa-right-from-bracket me-2"></i></i>Wyloguj</button>';
    dupaaa = document.getElementById("dupaWindow").value;
    haslo111 = document.getElementById("passwordWindow").value;


    console.log("wyszukajClick: " + wyszukajClick)

        if (dupaaa =="admin" && haslo111 =="1234") {
            czyZalogowany = 1;
            if (wyszukajClick === 1) {
                location.href = "page2.html";
            } 
            else {
            console.log("czy zalogowany wynosi:" + czyZalogowany);
            toggleLogin();
            element.innerHTML= div_wyloguj;
            }
        } 
        else {
            alert("Email lub hasło nieprawidłowe!");
        }
}

// ---------------------------- CZĘŚĆ, KTÓRA BYŁA W SCRIPT 2 ------------------------------------

console.log(localStorage);

aircraf = localStorage.getItem('planeType'); // przypisuje zmiennej aircraft wartość z głównej strony (jaki samolot) na podstawie wybranego miasta docelowego

sitsLimit = localStorage.getItem('passengersNumb'); // ilość pasażerów podana przez klienta
let sitx = 1; // licznik potrzebny w funkcji getSit(nr) - służy do zablokowania zaznaczania miejsc w samolocie w liczbie większej niż podana przez klienta 
let sitsNumbers = [0]; // tablica przechowująca miejsca zaznaczone przez klienta (dostaje wartości w funkcji getSit)
let sitIndex=0; // licznik wykorzystywany przy tworzeniu tablicy sitsNumbers

function getSit(nr) {  // Ta funkcja zapisuje w tablicy wybrane przez klienta miejsca oraz zmienia ich kolor
if(sitx <= sitsLimit) {
    if (document.getElementById('sit'+nr).classList.contains("sitClicked")){ 
        for (i = 0; i <= sitIndex; i++) {
            if(sitsNumbers[i]===sitsInPlane[nr]){
            sitsNumbers.splice(i,1);
            sitx=sitx-1;
    }
}
}   else {
        if (sitsNumbers[sitIndex]===0){
        sitsNumbers[sitIndex]=sitsInPlane[nr];
        sitx=sitx+1;
    }   else {
        sitIndex=sitIndex+1;
        sitsNumbers[sitIndex]=sitsInPlane[nr];
        sitx=sitx+1;
    }
}

        document.getElementById('sit'+nr).classList.toggle("sitClicked");
        document.getElementById('sit'+nr).classList.toggle("sit");
        console.log(sitsNumbers);

        document.getElementById("test").innerHTML = 'Twoje wybrane miejsca to: '+sitsNumbers;
        
    }
    else {   
         
        for (i = 0; i <= sitIndex; i++) {
        if(sitsNumbers[i]===sitsInPlane[nr]){
        sitsNumbers.splice(i,1);
        sitx=sitx-1;    
}
}

    }
}


if (aircraf === "EMBRAER 170") window.onload = machen;
if (aircraf === "BOEING 737-800") window.onload = machen2;
if (aircraf === "DREAMLINER 787-8") window.onload = machen3;

const sitsInPlane = []; // Tablica, w której zapisywane są WSZYSTKIE miejsca w samolocie (dla Embraera 76 elementów, dla boeinga 176, dla Dreamlinera 252)

function machen() {
    document.getElementById('plane').classList.add("planeEmbr");
    let sitRows = 1;
    for (i = 0; i <= 75; i=i+4) {
        sitsInPlane[i]='A'+(sitRows);
        sitsInPlane[i+1]='B'+(sitRows);
        sitsInPlane[i+2]='C'+(sitRows);
        sitsInPlane[i+3]='D'+(sitRows);
        sitRows = sitRows+1;
    }
    let divSits = "";

    for (i = 0; i <= 75; i++) {
        divSits = divSits+'<div id="sit'+i+'"class="sit" onclick="getSit('+i+')" >'+sitsInPlane[i]+'</div>'
        if ((i+1)%4===0) divSits = divSits+'<div style="clear:both"></div>'
        if ((i+3)%4===0) divSits = divSits+'<div class="empty"></div>'
    }
    document.getElementById("plane").innerHTML= divSits;
}


function machen2() {
    document.getElementById('plane').classList.add("planeBoeing");
    let sitRows = 1;
    for (i = 0; i <= 185; i=i+6) {
        sitsInPlane[i]='A'+(sitRows);
        sitsInPlane[i+1]='B'+(sitRows);
        sitsInPlane[i+2]='C'+(sitRows);
        sitsInPlane[i+3]='D'+(sitRows);
        sitsInPlane[i+4]='E'+(sitRows);
        sitsInPlane[i+5]='F'+(sitRows);
        sitRows = sitRows+1;
    }
    let divSits = "";

    for (i = 0; i <= 185; i++) {
        divSits = divSits+'<div id="sit'+i+'" class="sit" onclick="getSit('+i+')">'+sitsInPlane[i]+'</div>'
        if ((i+1)%6===0) divSits = divSits+'<div style="clear:both"></div>'
        if ((i+4)%6===0) divSits = divSits+'<div class="empty"></div>'
    }
    document.getElementById("plane").innerHTML= divSits;

}


function machen3() {
    document.getElementById('plane').classList.add("planeDream");
    let sitRows = 1;

    for (i = 0; i <= 251; i=i+9) {
        sitsInPlane[i]='A'+(sitRows);
        sitsInPlane[i+1]='B'+(sitRows);
        sitsInPlane[i+2]='C'+(sitRows);
        sitsInPlane[i+3]='D'+(sitRows);
        sitsInPlane[i+4]='E'+(sitRows);
        sitsInPlane[i+5]='F'+(sitRows);
        sitsInPlane[i+6]='G'+(sitRows);
        sitsInPlane[i+7]='H'+(sitRows);
        sitsInPlane[i+8]='I'+(sitRows);
        sitRows = sitRows+1;
    }
    let divSits = "";

    for (i = 0; i <= 251; i++) {
        divSits = divSits+'<div id="sit'+i+'" class="sit" onclick="getSit('+i+')">'+sitsInPlane[i]+'</div>'
        if ((i+1)%9===0) divSits = divSits+'<div style="clear:both"></div>'
        if ((i+1)%3===0 && (i+1)%9!==0 ) divSits = divSits+'<div class="empty"></div>'
    }
    document.getElementById("plane").innerHTML= divSits;

}

function loginBtn() {
    console.log("wykonana funkcja: loginBtn")

    element = document.getElementById("login-button-1");
    div_zaloguj = '<button type="button" class="btn btn-primary btn-lg btn-login" onclick="toggleLogin()"><i class="fa-solid fa-user me-2"></i>Zaloguj</button>';
    div_wyloguj = '<span class="me-3" style="color: white;"><i class="fa-solid fa-user me-2"></i>admin</span><button type="button" class="btn btn-primary btn-lg btn-login" onclick="toggleLogin()"><i class="fa-solid fa-right-from-bracket me-2"></i></i>Wyloguj</button>';
    div_powrót = '<button type="button" class="btn btn-primary btn-lg btn-login"><i class="fas fa-angle-left me-2"></i>Powrót dupa</button>'

    if (document.title === "Miejsca") {
        element.innerHTML= '<button type="button" class="btn btn-primary btn-lg btn-login"><i class="fas fa-angle-left me-2"></i>Powrót</button>'
    }

    else{

        if (czyZalogowany === 1) {
            element.innerHTML= div_wyloguj;
        }
        
        else {
            element.innerHTML= div_zaloguj;
        }
    }
}

function loginCheck() {
    console.log("wykonana funkcja: loginCheck")

    div_zaloguj = '<button type="button" class="btn btn-primary btn-lg btn-login" onclick="toggleLogin()"><i class="fa-solid fa-user me-2"></i>Zaloguj</button>';

    if (czyZalogowany === 1) {
        element.innerHTML= div_zaloguj;
        czyZalogowany = 0;
    }
}

function toggleFlyWindow() {
    console.log("wykonana funkcja: toggleLogin")

           if (document.getElementById("fly_window").classList.contains("visible")) {
            document.getElementById("fly_window").classList.remove("visible");
            document.getElementById("shadow").classList.remove("visible");
        }
        else{
            document.getElementById("fly_window").classList.add("visible");
            document.getElementById("shadow").classList.add("visible");
        }

}