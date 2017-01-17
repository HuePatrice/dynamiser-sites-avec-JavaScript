/*
    A la validation du formulaire
        verifier si les deux mdp sont identiques
         doivent avoir au moins 6 caractères
         doit contenir au moins 1 chiffre
 */

var form = document.querySelector('form');
form.addEventListener('submit', function(e){

    var mdp1 =  form.elements.mdp1.value;
    var mdp2 =  form.elements.mdp2.value;

    var mdpMsg="Mots de passe OK";

    if(mdp1 === mdp2){
       if(mdp1.length >= 6){

           var regex = /\d+/;

           if(!regex.test(mdp1)) {
               mdpMsg = 'Votre mot de passe doit contenir au moins un chiffre';
           }

       }else{

           mdpMsg = "La longueur du mot de passe doit être d'au minimum 6 caractères";

       }

    } else {

        mdpMsg = 'Vos mots de passe sont différents';

    }

    document.getElementById('infoMdp').textContent = mdpMsg;
    e.preventDefault();

});