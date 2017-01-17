//selection du bouton
var boutonElt = document.querySelector('button');

//selection du compteur
var compteurElt = document.getElementById('compteur');

//on definit un ID d'intervalle
var intervalID = null;

//on définit l'état du bouton: demarre = true; arrete = false;
var demarre = false;

//creation de la fonction compteSeconde()
function compteSeconde(){
    compteurElt.textContent = Number(compteurElt.textContent) + 1;

}

//on pose l'écouteur sur le bouton
boutonElt.addEventListener('click', function(){

    //si on clique sur le bouton, demarre = true
    if(!demarre){

        //on déclenche la modification à intervalles régulières
        intervalID = setInterval(compteSeconde,1000);

        //on change le texte du bouton
        boutonElt.textContent = 'Arrêter';

    } else { // on souhaite arrêter le compteur

        //on arrête le chrono
        clearInterval(intervalID);

        //on change le texte du bouton
        boutonElt.textContent = 'Démarrer';
    }

    //on change le statu du bouton pour le remettre a false
    demarre = !demarre;

});
