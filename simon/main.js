// 1 -  Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;

// creo un array in cui pusho i 5 num random

var memo = [];
var listaNum =[];
var cont = 0;

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
        cont++;
      }

    }
    alert('hai azzeccato numeri ' + cont);

  }


var miolancio, tuolancio, clikka;

clikka = document.getElementById('bottone');

clikka.addEventListener('click',tiraUnDado);

function tiraUnDado(){


  // // genero i due lanci random da 1 a 6
  miolancio = Math.floor(Math.random() * 6) + 1;
  tuolancio = Math.floor(Math.random() * 6) + 1;

  // // confronto le due var e dichiaro il vincit
  if (miolancio > tuolancio){
    document.getElementById('mio-id').innerHTML = 'il mio lancio: '+ miolancio + '; il tuo lancio: ' + tuolancio + '; quindi non hai vinto';
    //  }
  }
  else if (miolancio < tuolancio){
    document.getElementById('mio-id').innerHTML = 'il mio lancio: '+ miolancio + '; il tuo lancio: ' + tuolancio + '; quindi hai vinto';
    //  }
  }
  //
  else{
    document.getElementById('mio-id').innerHTML = 'il mio lancio: '+ miolancio + '; il tuo lancio: ' + tuolancio + '; quindi tira ancora';
     }
  //
}
