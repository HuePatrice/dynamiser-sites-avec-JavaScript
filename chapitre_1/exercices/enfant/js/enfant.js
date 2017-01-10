/**
 * Affiche un enfant d'un objet du DOM
 *
 * @param noeud le noeud du DOM
 * @param indice l'indice de l'enfant à chercher
 */
function afficherEnfant(noeud, indice){
    if(noeud.nodeType === document.ELEMENT_NODE){
       if((indice >= 0) && (indice < noeud.childNodes.length))
           console.log(noeud.childNodes[indice])
       else
           console.error('Indice incorrect')
    } else {
        console.error('Type de noeud incorrect')
    }
}

// Doit afficher le noeud h1
afficherEnfant(document.body, 1)

// Doit afficher l'erreur 'Indice incorrect'
// L'indice demandé est négatif
afficherEnfant(document.body, -1)

// Doit afficher l'erreur 'Indice incorrect'
//Le noeud body a mois de 9 noeuds enfants
afficherEnfant(document.body, 8)

// Doit afficher l'erreur "Type de noeud incorrect"
//Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
afficherEnfant(document.body.childNodes[0], 0)