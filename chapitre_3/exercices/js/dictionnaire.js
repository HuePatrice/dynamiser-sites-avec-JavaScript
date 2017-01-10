var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

var dlElt = document.createElement('dl');

mots.forEach(function(mot){

    var dtElt = document.createElement('dt');
    var strongElt = document.createElement('strong');
    strongElt.textContent = mot.terme;
    var ddElt = document.createElement('dd');
    ddElt.textContent = mot.definition;

    dtElt.appendChild(strongElt);
    dlElt.appendChild(dtElt);
    dlElt.appendChild(ddElt);

});

document.getElementById('contenu').appendChild(dlElt)