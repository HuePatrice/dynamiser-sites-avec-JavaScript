/****************************
 *
 * animer le compteur
 *
 ***************************/

var compteurElt = document.getElementById('compteur');

//diminue la valeur du compteur
function diminuerCompteur(){
    var compteur = Number(compteurElt.textContent);
    compteurElt.textContent = compteur - 1;
}

// //appeler la fonction toutes les secondes
// setInterval(diminuerCompteur,1000);

//annuler une action répétée: nous devons modifier le code ci-dessus

var compteurElt = document.getElementById('compteur');

//diminue la valeur du compteur
function diminuerCompteur(){

    var compteur = Number(compteurElt.textContent);

    if (compteur > 1)
        compteurElt.textContent = compteur - 1;
    else{

        //annule l'execution
        clearInterval(intervalId);

        //On modifie le <h1>
        var titre = document.getElementById('titre');
        titre.textContent = "BOOOOOOOOOOM !";
    }
}

// //appeler la fonction toutes les secondes
// var intervalId = setInterval(diminuerCompteur,1000);

/**************************************
 *
 * Effectuer une action après un délai
 *
 **************************************/

//nous devons de nouveau modifier le code ci-dessus

var compteurElt = document.getElementById('compteur');

//diminue la valeur du compteur
function diminuerCompteur(){

    var compteur = Number(compteurElt.textContent);

    if (compteur > 1)
        compteurElt.textContent = compteur - 1;
    else{

        //annule l'execution
        clearInterval(intervalId);

        //on modifie le <h1>
        var titre = document.getElementById('titre');
        titre.textContent = "BOOOOOOOOOOM !";

        //modification du titre après deux secondes
        setTimeout(function () {
           titre.textContent = 'Tout est cassé :(';
        }, 2000);
    }
}
//appeler la fonction toutes les secondes
var intervalId = setInterval(diminuerCompteur,1000);

/**************************************
 *
 * Animer des éléments de page
 *
 **************************************/

//DEBUTER UNE ANIMATION

var cadre = document.getElementById('cadre');
var bloc = document.getElementById('bloc');

//conversion en nombre du diamètre du bloc
var diametreBloc = parseFloat(getComputedStyle(bloc).width);
var vitesse = 7;

//deplacer le bloc sur sa gauche
function deplacerBloc(){

    //conversion en nombre de la position gauche du bloc
    var xBloc = parseFloat(getComputedStyle(bloc).left);

    //deplacement du bloc
    bloc.style.left = (xBloc + vitesse) + "px";

    //demande au navigateur d'appeler deplacerBloc') le + rapidement possible
    requestAnimationFrame(deplacerBloc);
}

// //debut de l'animation
// requestAnimationFrame(deplacerBloc);

//STOPPER UNE ANIMATION - necessite la modification du code ci-dessus

var cadre = document.getElementById('cadre');
var bloc = document.getElementById('bloc');
var vitesse = 7;

//conversion en nombre du diamètre du bloc
var largeurBloc = parseFloat(getComputedStyle(bloc).width);

//identifiant de l'animation
var animationId = null;

//deplacer le bloc sur sa gauche jusqu'au bord du cadre
function deplacerBloc(){

    //conversion en nombre de la position gauche du bloc
    var xBloc = parseFloat(getComputedStyle(bloc).left);

    //conversion en nombre de la largeur du cadre
    var xMax = parseFloat(getComputedStyle(cadre).width);

    //si le bloc n'est pas au bout du cadre
    if(xBloc + largeurBloc <= xMax){

        //deplacement du bloc
        bloc.style.left = (xBloc + vitesse) + "px";

        //demande au navigateur d'appeler deplacerBloc') le + rapidement possible
        requestAnimationFrame(deplacerBloc);

    } else {

        //annulation de l'animation
        cancelAnimationFrame(animationId);

    }
}

//debut de l'animation
//animationId = requestAnimationFrame(deplacerBloc);

/**************************************
 *
 * Les animations en CSS
 *
 **************************************/

/*
cf feuille de style cours.css dans le dossier '../css/cours.css'; le debut de l'animation est commenté pour pouoir voir l'animation en CSS
 */
