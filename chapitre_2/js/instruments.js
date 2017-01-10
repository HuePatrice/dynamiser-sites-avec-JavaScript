function infoLiens(){
    var liensElts = document.getElementsByTagName('a');

    var nombreLiens = liensElts.length;

    if(nombreLiens > 0){
        console.log(nombreLiens)
        console.log(liensElts[0].getAttribute('href'))
        console.log(liensElts[nombreLiens - 1].getAttribute('href'))
    }
}

function possede(id,classe){

    var instrument = document.getElementById(id);

   if(instrument !== null)
       console.log(instrument.classList.contains(classe))
   else
       console.error('Aucun élément ne possède l\'identifiant ' + id)
}

infoLiens();

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur