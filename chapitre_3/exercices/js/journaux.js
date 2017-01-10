var journaux = ['http://lemonde.fr', 'http://lefigaro.fr','http://liberation.fr'];

for (var i = 0; i < journaux.length; i++){

    // Creation d'une liste non ordonnée
    var liste = document.createElement('ul');
    liste.id = "liste";

    //Creation des lignes
    var ligne = document.createElement('li');
    ligne.id= journaux[i];

    //Creation des liens
    var lienElt = document.createElement('a');
    lienElt.href = journaux[i];
    lienElt.setAttribute('target','_blank');
    lienElt.textContent= journaux[i];

    //Insertion des elements dans le DOM
    document.getElementById('contenu').appendChild(liste)
    document.getElementById('liste')
        .appendChild(ligne)
        .appendChild(lienElt)
}
