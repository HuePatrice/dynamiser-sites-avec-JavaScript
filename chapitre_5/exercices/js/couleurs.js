document.addEventListener('keypress', function(e){
    var touche = String.fromCharCode(e.charCode);
    touche = touche.toUpperCase();
    var couleur = '';
    switch(touche){
        case 'R':
            couleur = "red";
            break;
        case 'J':
            couleur = "yellow";
            break;
        case 'V':
            couleur = "green";
            break;
        case 'B':
            couleur = "blue";
            break;
        default:
            alert( 'touche ' + touche + ' non gérée');
    }
    var div = document.getElementsByTagName('div');

    for(var i = 0; i < div.length; i++)
        div[i].style.backgroundColor = couleur ;
});

