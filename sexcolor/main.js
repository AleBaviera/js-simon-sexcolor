//
// 2 -  Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito;


var nome = prompt('ti chiami?');

var sex = prompt('sei m o f?');

var element = document.getElementById('ciao');

if (sex == 'm'){
  element.style.color = 'lightblue';
}

else{
  element.style.color = 'pink';
}

element.innerHTML = nome ;
