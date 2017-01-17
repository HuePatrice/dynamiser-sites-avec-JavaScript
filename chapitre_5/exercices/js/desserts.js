// selectionner le bouton

var bouton = document.querySelector('button');

/*
    au clic du bouton
        on prompt le choix utilisateur
        on crée une fonction qui met la 1e lettre en majuscule
        on crée une li
        son textContent sera le choix utilisateur

        au clic de la li, on prompt une modification
        le textContent de la li sera le choix modifié

        on insère la li dans le DOM
 */

bouton.addEventListener('click', function(){

    var choix = prompt('Entrez votre dessert préféré: ');

    //
    var final = function(){
        return choix.substr(0,1).toUpperCase() + choix.substr(1,choix.length).toLowerCase();
    }

    var li = document.createElement('li');
    li.textContent = final(choix);

    li.addEventListener('click', function(e){
        var modif = prompt('Modifiez votre dessert: ',e.target.textContent);
        li.textContent = modif;
    });


    document.getElementById('desserts').appendChild(li);
});


