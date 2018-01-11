let monBouton = document.querySelector('button');
let monTitre = document.querySelector('h1');
monTitre.textContent = 'Hello world!';

// NOM D'UTILISATEUR

// Fonction definirUtilisateur
function définirNomUtilisateur() {
    let monNom = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', monNom);
    monTitre.textContent = 'Mozilla est cool, ' + monNom;
}

if(!localStorage.getItem('nom')) {
    définirNomUtilisateur();
} else {
    let nomEnregistré = localStorage.getItem('nom');
    monTitre.textContent = 'Mozilla est cool, ' + nomEnregistré;
}

monBouton.onclick = function() {
    définirNomUtilisateur();
}

// Changement d'image
let monImage = document.querySelector('img');

monImage.onclick = function() {
    let maSrc = monImage.getAttribute('src');
    if(maSrc === 'images/firefox-icon.png') {
      monImage.setAttribute ('src','images/trollface.png');
    } else {
      monImage.setAttribute ('src','images/firefox-icon.png');
    }
}