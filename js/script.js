//alert('JS carregado');

//Manipulação de DOM
//Selecionando os elementos do HTML que serão manipulados
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

var bgPopup = document.querySelector('.bg-popup');
var btnClose = document.querySelector('.close');

btnClose.addEventListener('click', function(){
    //bgPopup.style.display='none'; 
    bgPopup.classList.add('bg-popup-close');
})

//Exibindo no console do navegador
//console.log(btnMenu);
//console.log(menu);

//Associando eventos aos elementos selecionados

btnMenu.addEventListener('click', function(){
    //menu.style.display='block';    
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
});


menu.addEventListener('click', function(){
    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');
})
