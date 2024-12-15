const more1 = document.querySelector(".more1");
const join1 = document.querySelector(".join1");
const more2 = document.querySelector(".more2");
const join2 = document.querySelector(".join2");
const showAll = document.querySelector(".showAll");

function showAllVagas(){


alert("No Momento não há mais vagas")
}

function moreV1(){
   
alert("Requisitos mínimos: Noções de Corte de cabelo,Vontade de Aprender")

}

function moreV2(){
    alert("Acesse a página https://carreiras.magazineluiza.com.br/ para saber mais")
}

showAll.addEventListener('click',showAllVagas);

more1.addEventListener('click',moreV1);
more2.addEventListener('click',moreV2);