const more1 = document.querySelector(".more1");
const join1 = document.querySelector(".join1");
const more2 = document.querySelector(".more2");
const join2 = document.querySelector(".join2");
const showAll = document.querySelector(".showAll");
const menu = document.querySelector("navMobile");
const list = document.querySelector('li');

// Seleciona o ícone do menu e as opções
const menuIcon = document.querySelector('.menu-icon');
const menuOptions = document.querySelector('.menu-options');

// Função para abrir/fechar o menu
function toggleMenu() {
    menuOptions.classList.toggle('active');
}



function showAllVagas(){


alert("No Momento não há mais vagas")
}

function moreV1(){
   
alert("Requisitos mínimos: Noções de Corte de cabelo,Vontade de Aprender")

}

function moreV2(){
    alert("Acesse a página https://carreiras.magazineluiza.com.br/ para saber mais")
}



menuIcon.addEventListener('click', toggleMenu);
showAll.addEventListener('click',showAllVagas);
more1.addEventListener('click',moreV1);
more2.addEventListener('click',moreV2);