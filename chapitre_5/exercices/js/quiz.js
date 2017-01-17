// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

/*
 créer une fonction qui créer chaque question
    creer une div pour l'enoncé
    creer premier élement strong avec le numéro de la question;
    textContent sera l'énoncé en italique
    créer bouton qui affichera la réponse au clic (fonction)
        creer une div
        son textContent sera la réponse à la question
        on l'insere dans le DOM

    on insere la div de l'énoncé avec le bouton dans le DOM
  */
//initalisation compteur
var i = 1;

// début de la boucle
questions.forEach(function(question){

        //titre de la question
        var titreElt = document.createElement('strong');
        titreElt.textContent = 'Question n° ' + i + ' : ';

        //balise <i> pour enonce
        var texteEnonceElt = document.createElement('i');
        texteEnonceElt.textContent = question.enonce;

        //enonce de la question
        var enonceElt = document.createElement('div');
        enonceElt.appendChild(titreElt);
        enonceElt.appendChild(texteEnonceElt);

        //Creation du bouton
        var zoneReponseElt = document.createElement('div');
        var boutonElt = document.createElement('button');
        boutonElt.textContent = "Afficher la réponse";
        zoneReponseElt.appendChild(boutonElt);

        boutonElt.addEventListener('click', function () {

            //Affichage du texte à la place du bouton
            var reponseElt = document.createElement('div');
            reponseElt.textContent = question.reponse;
            zoneReponseElt.innerHTML = "";
            zoneReponseElt.appendChild(reponseElt);

        });

        //creation de la zone de question, incluant la réponse
        var questionElt = document.createElement('p');
        questionElt
            .appendChild(enonceElt)
            .appendChild(zoneReponseElt)
        ;

        //insertion dans le DOM
        document.getElementById('contenu').appendChild(questionElt);

        i++;

});// fin de la boucle