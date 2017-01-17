// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

var inputElt = document.querySelector('input');
var suggestionsElt = document.getElementById('suggestions');

//écouteur d'évènement de saisie
inputElt.addEventListener('input', function(){

    //vide la liste des suggestions
   suggestionsElt.innerHTML = "";

   //on boucle sur chaque pays
   listePays.forEach(function(pays){

       /*
       si la valeur saisie correspond a une valeur du tableau (indexOf retourne 0 si élément est présent, -1 si absent)
        */
       if(pays.indexOf(inputElt.value) === 0){

           //on créer une <div>
          var suggestionElt = document.createElement('div');

          //on lui donne le style défini dans la CSS
           suggestionElt.classList.add('suggestion');

           //la valeur de la suggestion sera le nom du pays
           suggestionElt.textContent = pays;

           //insertion dans le DOM de la <div> de suggestion
           suggestionsElt.appendChild(suggestionElt);

           //gestion du click de la suggestion
           suggestionElt.addEventListener('click', function(e){

               //Remplacement de la saisie par le nom de la suggestion
               inputElt.value = e.target.textContent;

               //vidage de la liste de suggestion
               suggestionsElt.innerHTML = "";
           });

       }
   });
});