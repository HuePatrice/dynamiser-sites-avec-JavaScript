// Modif du HTML de la liste: ajout

document.getElementById('langages').innerHTML += '<li id="c">C</li>';

//suppression - innerHTML souvent utilisé pour vider un élément de tout son contenu, mais uniquement pour des petites modifications.

//document.getElementById('langages').innerHTML = "";

//Modification du contenu textuel du 1e titre

document.querySelector('h1').textContent += " de programmation."

// Definition de l'attribut "id" du 1e titre
document.querySelector('h1').setAttribute('id','titre')
/*
equivaut à écrire:
document.querySelector('h1').id = "titre";
 */

//ajouter ou supprimer des classes
var titreElt = document.querySelector('h1');
titreElt.classList.remove('debut')
titreElt.classList.add('titre')
console.log(titreElt)

//ajouter d'un nouvel élément au DOM

/*
se décompose en trois étapes:
    - creation de l'el,
    - définitions de ses infos (contenu, id, classe etc),
    - Insertion dans le DOM.
 */

var pythonElt = document.createElement('li');
pythonElt.id = "python";
pythonElt.textContent = "Python";
document.getElementById('langages').appendChild(pythonElt);

// Variante
var rubyElt = document.createElement('li');
rubyElt.id = "ruby";
rubyElt.appendChild(document.createTextNode('Ruby'));
document.getElementById('langages').appendChild(rubyElt);

// ajout d'un noeud dans un autre noeud

var perlElt = document.createElement('li')
perlElt.id= "perl"
perlElt.textContent = "Perl"
document.getElementById('langages').insertBefore(perlElt,document.getElementById('php'))

/* choisir position exacte de l'élément avec insertAdjacentHTML; Plusieurs choix de paramètres:
    - beforebegin => avant l'el exstant lui-même,
    - afterbegin => juste à l'intérieur de l'el existant, avant son 1e enfant,
    - beforeend =>  juste à l'intérieur de l'el existant, avant son derneir enfant,
    - afterend => après l'el exstant lui-même
 */

// ajout en tout début de liste
document.getElementById('langages').insertAdjacentHTML("afterbegin",'<li id="javascript">JavaScript</li>')

//remplacer un noeud existant

var bashElt = document.createElement('li')
bashElt.id="bash";
bashElt.textContent = "Bash"
document.getElementById('langages').replaceChild(bashElt,document.getElementById('perl'))

// supprimer noeud existant

document.getElementById('langages').removeChild(document.getElementById('bash'))

// exercices

var pElt = document.createElement('p');
var aElt= document.createElement('a');
pElt.id = 'lien';
aElt.href= "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
aElt.setAttribute('target', '_blank');
aElt.textContent = "liste";
pElt.appendChild(document.createTextNode('En voici une '));
pElt.appendChild(aElt);
pElt.appendChild(document.createTextNode(' plus complète.'));
document.getElementById('contenu').appendChild(pElt)

