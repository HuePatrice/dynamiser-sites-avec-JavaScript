var cadre = document.getElementById('cadre');
var ballon = document.getElementById('ballon');
var vitesse = 7;

//definition du diametre du ballon
var diametreBallon = parseFloat(getComputedStyle(ballon).width);

//Creation d'un ID d'animation
var animationID = null;

//positionnement gauche
var xMin = 0;

//sens de déplacement: 1 = droite, 2 = gauche
var direction = 1;

//creation fonction deplacerBallon()
function deplacerBallon(){

    //position gauche du ballon
    var xBallon = parseFloat(getComputedStyle(ballon).left);

    //position maximum du bloc
    var xMax = parseFloat(getComputedStyle(cadre).width);

    //si le ballon arrive à un bord du cadre
    if((xBallon + diametreBallon > xMax) || (xBallon < xMin)){

        //inversion du sens
        direction *= -1;
    }

    //deplacement dans le sens actuel
    ballon.style.left = (xBallon + vitesse * direction) + 'px';

    //demande au navigateur d'appeler au + vite l'animation
    animationID = requestAnimationFrame(deplacerBallon);
}

var demarrerBtn = document.getElementById('demarrer');
var arreterBtn = document.getElementById('arreter');

//on pose l'ecouter sur le bouton démarrer
demarrerBtn.addEventListener('click', function(){

    //changement de l'état du bouton
    demarrerBtn.disabled = true;
    arreterBtn.disabled = false;

    //debut de l'animation
    requestAnimationFrame(deplacerBallon);
});

//gestion du bouton arreter
arreterBtn.addEventListener('click', function(){

    //changement de l'état du bouton
    arreterBtn.disabled = true;
    demarrerBtn.disabled = false;

    //debut de l'animation
    cancelAnimationFrame(animationID);
});