/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];


// TODO : compléter ce fichier pour ajouter les liens à la page web

/**
 * Processus:
 *
 *  Pour chaque élément du tableau listeLiens
 *
 *          créer une div qui a la classe "lien" ainsi qu'un id de type "lien-*", l'insérer dans la div qui a la classe "contenu";
 *
 *          puis créer et insérer un lien comportant le titre, un noeud de texte comportant l'url;
 *
 *          et enfin créer une span comportant l'auteur;
 *
 *  Insérer le tout dans la div qui a l'id "lien";
 *
 */

//début de la boucle
for(var i = 0; i < listeLiens.length; i++){

    //creation de la div id="lien-*" class="lien"
    var divElt = document.createElement('div');

    /*
    création d'un id spécifique à chaque lien: pour avoir un id unique et identifiable, je le préfixe par "lien-" et lui rajoute sa position dans le tableau listeLiens + 1 (afin que cela ne démarre pas par "lien-0"). J'effectue ceci avec le compteur "i", voilà pourquoi j'ai choisi la boucle "for" au lieu de "forEach".
     */
    divElt.id = "lien-" + (i + 1);

    //ajout de la classe CSS
    divElt.className = "lien";

    //création du lien
    var lienElt = document.createElement('a');

    //definition des attributs du lien
    lienElt.href = listeLiens[i].url;
    lienElt.textContent = listeLiens[i].titre;

    //definition d'un attribut "target" afin qu'au click du lien, il s'ouvre dans un nouvel onglet
    lienElt.setAttribute('target','_blank');

    //ajout des CSS aux liens

    //on ajoute la couleur demandée
    lienElt.style.color = "#428bca";
    //on rajoute du gras
    lienElt.style.fontWeight = "bolder";
    // on enlève les traits
    lienElt.style.textDecoration = "none";
    //on rajoute un peu d'espace a droite pour la visibilité
    lienElt.style.paddingRight = "5px";

    //création du texte à côté du lien
    var info = document.createTextNode(listeLiens[i].url)

    //creation d'une balise <br> pour séparer les éléments
    var espaceEntreDiv = document.createElement('br');

    //creation de la description, avec une balise <span>
    var description = document.createElement('span');

    //ajout du texte de la description
    description.textContent = 'Ajouté par ' + listeLiens[i].auteur;


    //insertion dans le DOM de la div avec l'id propre à chaque lien et la classe "lien"
    document.getElementById('contenu').appendChild(divElt);

    //insertion dans le DOM du lien - son parent est la div créée avec son id unique
    document.getElementById(divElt.id).appendChild(lienElt);

    //insertion dans le DOM du texte à côté du lien
    document.getElementById(divElt.id).appendChild(info);

    //insertion dans le DOM de l'espace de séparation
    document.getElementById(divElt.id).appendChild(espaceEntreDiv);

    //ajout dans le DOM de la description
    document.getElementById(divElt.id).appendChild(description);

}; // fin de la boucle