var titresElts = document.getElementsByTagName('h2')
console.log(titresElts[0])
console.log(titresElts.length)

var merveillesElts = document.getElementsByClassName('merveilles')
for(var i = 0; i < merveillesElts.length; i++){
    console.log(merveillesElts[i])
}

console.log(document.getElementById('nouvelles'))

console.log(document.querySelectorAll('p').length)

console.log(document.querySelectorAll('#contenu p').length)

console.log(document.querySelectorAll('.existe').length)

console.log(document.querySelectorAll('#antiques > .existe').length)

console.log(document.querySelector('p'))

console.log(document.getElementById('contenu').innerHTML)

console.log(document.getElementById('contenu').textContent)

console.log(document.querySelector('a').getAttribute('href'))

console.log(document.querySelector('ul').id)

console.log(document.querySelector('a').href)

if(document.querySelector('a').hasAttribute('target'))
    console.log('Le premier lien possède l\'attribut target')
else
    console.log('Le premier lien ne possède pas l\'attribut target')

var classes = document.getElementById('antiques').classList
console.log(classes.length)
console.log(classes[0])

if(document.getElementById('antiques').classList.contains('merveille'))
    console.log('L\'élément identifié par "antiques" possède la classe "merveille".')
else
    console.log('L\'élément identifié par "antiques" ne possède pas la classe "merveille".')