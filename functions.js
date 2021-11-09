const menu              = document.querySelector(".menu-ul");
const openMenuBtn       = document.querySelector(".open-menu");
const closeMenuBtn      = document.querySelector(".close-menu");

const btnSwitch         = document.querySelector("#switch");
const btnSwitchOn       = document.querySelector("active");
const contentBackend    = document.getElementById("back");
const contentFront      = document.getElementById("front");

const radioBtn          = document.getElementById("radio1");
const labelRd1          = document.getElementById("rd1")
const radioBtn2         = document.getElementById("radio2");
const labelRd2          = document.getElementById("rd2")
const radioBtn3         = document.getElementById("radio3");
const labelRd3          = document.getElementById("rd3")
const radioBtn4         = document.getElementById("radio4");
const labelRd4          = document.getElementById("rd4")
const radioBtn5         = document.getElementById("radio5");
const labelRd5          = document.getElementById("rd5");

const navigationM       = document.getElementById("manual");
const icon              = document.getElementById("icon");

const menu              = document.getElementById("menu");
const indicador         = document.getElementById("indicador")
const seccion1          = document.querySelector(".profile")
const seccion2          = document.querySelector(".Skills")
const seccion3          = document.querySelector(".proyects")
const seccion4          = document.querySelector(".contact")


function toggleMenu(){
    menu.classList.toggle("menu_opened")
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

function inputSwitch(){

    btnSwitch.classList.toggle("active");

    if(btnSwitch.classList.contains("active")){
        contentFront.style.display = "none";
        contentBackend.style.display = "block";   
    }else{
        contentFront.style.display = "block";
        contentBackend.style.display = "none"; 
    }
}

function onload(){
    labelRd1.style.backgroundColor = "rgb(74, 255, 104)";
    labelRd1.style.boxShadow       = "0px 0px 10px rgb(74, 255, 104)";
}

let counter = 1;

function sliderState(state, counter){
    if(state == 1 || counter == 1){
        labelRd1.style.backgroundColor = "rgb(74, 255, 104)";
        labelRd1.style.boxShadow       = "0px 0px 10px rgb(74, 255, 104)";
        labelRd2.style.backgroundColor = "transparent";
        labelRd2.style.boxShadow       = "none";
        labelRd3.style.backgroundColor = "transparent";
        labelRd3.style.boxShadow       = "none";
        labelRd4.style.backgroundColor = "transparent";
        labelRd4.style.boxShadow       = "none";
        labelRd5.style.backgroundColor = "transparent";
        labelRd5.style.boxShadow       = "none";
    }else if(state == 2 || counter == 2){
        labelRd2.style.backgroundColor = "rgb(74, 255, 104)";
        labelRd2.style.boxShadow       = "0px 0px 10px rgb(74, 255, 104)";
        labelRd1.style.backgroundColor = "transparent";
        labelRd1.style.boxShadow       = "none";
        labelRd3.style.backgroundColor = "transparent";
        labelRd3.style.boxShadow       = "none";
        labelRd4.style.backgroundColor = "transparent";
        labelRd4.style.boxShadow       = "none";
        labelRd5.style.backgroundColor = "transparent";
        labelRd5.style.boxShadow       = "none";
    }else if(state == 3 || counter == 3){
        labelRd3.style.backgroundColor = "rgb(74, 255, 104)";
        labelRd3.style.boxShadow       = "0px 0px 10px rgb(74, 255, 104)";
        labelRd2.style.backgroundColor = "transparent";
        labelRd2.style.boxShadow       = "none";
        labelRd1.style.backgroundColor = "transparent";
        labelRd1.style.boxShadow       = "none";
        labelRd4.style.backgroundColor = "transparent";
        labelRd4.style.boxShadow       = "none";
        labelRd5.style.backgroundColor = "transparent";
        labelRd5.style.boxShadow       = "none";
    }else if(state == 4 || counter == 4){
        labelRd4.style.backgroundColor = "rgb(74, 255, 104)";
        labelRd4.style.boxShadow       = "0px 0px 10px rgb(74, 255, 104)";
        labelRd2.style.backgroundColor = "transparent";
        labelRd2.style.boxShadow       = "none";
        labelRd3.style.backgroundColor = "transparent";
        labelRd3.style.boxShadow       = "none";
        labelRd1.style.backgroundColor = "transparent";
        labelRd1.style.boxShadow       = "none";
        labelRd5.style.backgroundColor = "transparent";
        labelRd5.style.boxShadow       = "none";
    }else if(state == 5 || counter == 5){
        labelRd5.style.backgroundColor = "rgb(74, 255, 104)";
        labelRd5.style.boxShadow       = "0px 0px 10px rgb(74, 255, 104)";
        labelRd2.style.backgroundColor = "transparent";
        labelRd2.style.boxShadow       = "none";
        labelRd3.style.backgroundColor = "transparent";
        labelRd3.style.boxShadow       = "none";
        labelRd4.style.backgroundColor = "transparent";
        labelRd4.style.boxShadow       = "none";
        labelRd1.style.backgroundColor = "transparent";
        labelRd1.style.boxShadow       = "none";
    }
}

function slider(){
    document.getElementById('radio' + counter).checked = true;
    sliderState(0, counter)
    if (counter >= 5){
        counter = 0;
    }
    counter++; 
}

temporizador = setInterval("slider()", 4000);

navigationM.addEventListener('mouseover', function() {
    clearInterval(temporizador);
})  

navigationM.addEventListener('mouseleave', function() {
    temporizador = setInterval("slider()", 4000);
});
