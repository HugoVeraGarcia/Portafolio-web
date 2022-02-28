
const imageUrl = [
    "./img/Wizeline.png",
    "./img/Hootsuite.png",
    "./img/Google.png"
]

const textoData = [
    {
        tema: "Javascript",
        tiempo: "6 meses"
    },
    {
        tema: "React",
        tiempo: "3 meses"
    },
    {
        tema: "Nodejs",
        tiempo: "8 meses"
    }
]

let indexImageNow = 0;

const btnBack = document.getElementById("back");
const btnNext = document.getElementById("next");
const img = document.getElementById("carrusel__img");
const tema = document.querySelector(".experiencia__tema");
const tiempo = document.querySelector(".experiencia__tiempo")
//const tema = document.getElementsByClassName('experiencia__tema');
//const tiempo = document.getElementsByClassName('experiencia__tiempo');

document.addEventListener("DOMContentLoaded", loadImagen )
btnNext.addEventListener("click", showNext);
btnBack.addEventListener("click", showBack);

function loadImagen(){
    img.style.backgroundImage = `url(${imageUrl[indexImageNow]})`;
    console.log(tema.textContent, tiempo.textContent)
    tema.textContent = textoData[indexImageNow].tema;
    tiempo.textContent = textoData[indexImageNow].tiempo;
}

function showNext(e){
    
    if(indexImageNow < imageUrl.length-1){
        indexImageNow++;
    }else{
        indexImageNow = 0;
    }

    loadImagen();

    e.stopPropagarion;
}

function showBack(e){
    
    if( indexImageNow === 0 ){
        indexImageNow = imageUrl.length - 1;
    }else{
        indexImageNow--;
    }

    loadImagen();

    e.stopPropagarion;
}