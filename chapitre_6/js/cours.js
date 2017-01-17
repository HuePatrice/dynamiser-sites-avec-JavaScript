var pseudoElt = document.getElementById('pseudo');
pseudoElt.value = 'Patrice';

//ajout message d'aide
pseudoElt.addEventListener('focus',function(){
   document.getElementById('aidePseudo').textContent = "Entrez votre pseudo";
});

//suppression message d'aide
pseudoElt.addEventListener('blur', function(){
   document.getElementById('aidePseudo').textContent = "";
});

//focus sur la zone de saisie du pseudo
pseudoElt.focus();

/***************************************************
 *
 * Zone d'options
 *
***************************************************/

//checkbox
document.getElementById('confirmation').addEventListener('change', function(e){
   console.log('Demande de confirmation: ' + e.target.checked);
});

//boutons radio
var aboElts = document.getElementsByName('abonnement');
for(var i = 0; i < aboElts.length; i++){
    aboElts[i].addEventListener('change', function(e){
       console.log('Formule d\'abonnement choisie: ' + e.target.value);
    });
}

//select
document.getElementById('nationalite').addEventListener('change',function (e) {
    console.log('Code de nationalité: ' + e.target.value);
});

/***************************************************
 *
 * Le formulaire comme élément du DOM
 *
 ***************************************************/

var form = document.querySelector('form');
//console.log(form.elements)
console.log('Nombre de champs de saisie: ' + form.elements.length);
console.log(form.elements[0].name);
console.log(form.elements.courriel.type);

//soumission du formulaire
form.addEventListener('submit', function (e) {

    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;

    console.log('Vous avez choisi le pseudo ' + pseudo + ', le mot de passe ' + mdp + ' et le courriel ' + courriel);

    if(form.elements.confirmation.checked)
        console.log('Vous avez demandé une confirmation par courriel');
    else
        console.log('Vous n\'avez pas demandé une confirmation par courriel');

    switch(form.elements.abonnement.value){
            case 'abonewspromo':
                console.log('Vous êtes abonné(e) à la newsletter et aux promotions');
                break;
            case 'abonews':
                console.log('Vous êtes abonné(e) à la newsletter');
                break;
            case 'aborien':
                console.log('Vous vous êtes abonné(e) à rien');
                break;
            default:
                 console.log('Erreur: code d\'abonnement non reconnu.');
    }

    switch(form.elements.nationalite.value) {
        case 'FR':
            console.log('Vous êtes Français(e)');
            break;
        case 'BE':
            console.log('Vous êtes Belge');
            break;
        case 'SUI':
            console.log('Vous êtes Suisse(se)');
            break;
        default:
            console.log('Erreur: code de nationalité non reconnu.');
    }
    e.preventDefault();
});

//Validation des données saisies

//pendant la saisie
document.getElementById('mdp').addEventListener('input', function(e){
   var mdp = e.target.value;
   var longueurMdp = 'faible';
   var couleurMsg = 'red';

   if(mdp.length >= 8){
       longueurMdp = 'suffisante';
       couleurMsg = 'green';
   } else if(mdp.length >= 4){
       longueurMdp = 'moyenne';
       couleurMsg = 'orange';
   }

   var aideMdpElt = document.getElementById('aideMdp');
   aideMdpElt.textContent = 'Longueur du mot de passe ' + longueurMdp;
   aideMdpElt.style.color = couleurMsg;
});

// a la fin de la saisie

// document.getElementById('courriel').addEventListener('blur', function(e){
//     var validateCourriel = "";
//     if(e.target.value.indexOf('@') === -1)
//         validateCourriel = "Adresse invalide";
//
//     document.getElementById('aideCourriel').textContent = validateCourriel;
// });

//avec les Regex
var regex = /@/;
console.log(regex.test(''));
console.log(regex.test('@'));
console.log(regex.test('test&test.fr'));
console.log(regex.test('test@test.fr'));

document.getElementById('courriel').addEventListener('blur', function(e){
    var regex = /.+@.+\..+/;
    var validateCourriel = "";
    if(!regex.test(e.target.value))
        validateCourriel = "Adresse invalide";

    document.getElementById('aideCourriel').textContent = validateCourriel;
});