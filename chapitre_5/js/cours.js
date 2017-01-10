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