// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return [];
    }
}

//pour chaque maison
maisons.forEach(function(maison){

    //on créer un élément HTML <option>
    var optionElt = document.createElement('option');

    //value = code
    optionElt.value = maison.code;

    //affichage nom maison
    optionElt.textContent = maison.nom;

    //insertion dans le DOM
    document.getElementById('maison').appendChild(optionElt);

});

//mise en cache de la variable du <select>
var selection = document.getElementById('maison');

//écouteur d'évènement change du select
selection.addEventListener('change', function(e){

    //on selectionne l'<ul>
    var listeElt = document.getElementById('persos');

    //on vide son HTML si existant
    listeElt.innerHTML = "";

    //pour chaque élément du tableau retourné par getPersonnages()
    for(var i = 0; i < getPersonnages(e.target.value).length; i++){

        //on créer une <li>
        var ligne = document.createElement('li');

        //son texte sera la value
        ligne.textContent = getPersonnages(e.target.value)[i];
        //insertion dans le DOM de la <li>
        listeElt.appendChild(ligne);

    }

});

