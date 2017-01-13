// function clic() {
//     console.log('Clic !');
// }
// var boutonElt = document.getElementById('bouton');
// boutonElt.addEventListener("click", clic);
//
// //Evenement par fonction anonyme
// boutonElt.addEventListener('click', function(){
//     console.log('Clic !');
// });
//
// //enleve l'événement
// boutonElt.removeEventListener('click',clic);
//
//
// // afficher les propriétés d'un événement - type, target
// document.getElementById('bouton').addEventListener("click", function(e){
//     console.log('Evènement: ' + e.type + ', texte de la cible: ' + e.target.textContent);
// });

//Appui sur touche du clavier
document.addEventListener('keypress', function(e){
    console.log('Vous avez appuyé sur la touche ' + String.fromCharCode(e.charCode));
});

//appui sur touches autres que des caractères
function infosClavier(e){
    console.log('Evènement clavier: ' + e.type + ', touche: ' + e.keyCode);
}

document.addEventListener('keydown',infosClavier);
document.addEventListener('keyup',infosClavier);

//clic de souris

// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
        case 0: // 0 est le code du bouton gauche
            bouton = "gauche";
            break;
        case 1: // 1 est le code du bouton du milieu
            bouton = "milieu";
            break;
        case 2: // 2 est le code du bouton droit
            bouton = "droit";
            break;
    }
    return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) {
    console.log("Evènement souris : " + e.type + ", bouton " +
        getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

// Gestion du clic souris
document.addEventListener("click", infosSouris);

//events souris
document.addEventListener('mousedown', infosSouris);
document.addEventListener('mouseup', infosSouris);

//events loading
window.addEventListener('load', function () {
    console.log('Page entièrement chargée')
});

//fermeture de la page
window.addEventListener('beforeunload', function(e){
    var message = "Voulez-vous réellement quitter cette page?";
    e.returnValue = message;
    return message;
});

//tester la propagation

//clic sur le document
document.addEventListener('click',function(){
   console.log('Gestionnaire document');
});

//clic sur le paragraphe
document.getElementById('para').addEventListener('click',function(){
    console.log('Gestionnaire paragraphe');
});

//clic sur le bouton
document.getElementById('propa').addEventListener('click',function(){
    console.log('Gestionnaire bouton');
});

//on peux stopper la propragation avec stopPropagation depuis une fonction qui gère un évènement
document.getElementById('propa').addEventListener('click',function(e){
    console.log('Gestionnaire bouton');
    e.stopPropagation();
});

//bloquer action par défaut d'un élément
document.getElementById('interdit').addEventListener('click', function(e){
    alert('Continuez plutôt à lire le cours :) ');
    e.preventDefault();
});