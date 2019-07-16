// 1 -  Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;

// creo un array in cui pusho i 5 num random

var memo = [];
var listaNum =[];
var cont = 0;
var listaPresi = [];

for (var i = 0; i < 5; i++) {
  memo.push(Math.floor(Math.random()*100 + 1));
}


alert(memo);



console.log(memo);
 setTimeout(visti, 30000);

  function visti(){
    for (var j = 0; j < 5; j++) {

      var v = parseInt(prompt('hai visto il num:'));

      listaNum.push(v);
    }
    console.log(listaNum);



    for (var i = 0; i < 5; i++) {
      if(memo.includes(listaNum[i])){
        listaPresi.push(listaNum[i]);
        cont++;
      }

    }
    alert('hai azzeccato numeri ' + cont + ' che sono: ' + listaPresi);

  }
