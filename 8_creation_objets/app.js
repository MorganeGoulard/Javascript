// fonction constructeur, si on veut créer article, nom function en PAscale Case
function Article(designation, prixUHT, description, urlImage){
    this.designation = designation; // { designation : designation}
    this.prixUHT = prixUHT; // { designation : designation, prixUHT : prixUHT }
    this.description = description; // { designation : designation, prixUHT : prixUHT, description : description }
    this.urlImage = urlImage; // { designation : designation, prixUHT : prixUHT, description : description, urlImage : urlImage }
    // return { designation : designation, prixUHT : prixUHT, description : description, urlImage : urlImage }
}

// on a créé une fonction qui reçoit des paramètres, 
// mais this sert à quoi ??

const article = Article(
    "Macbook Pro 16 2021", 
    3500, 
    "Meilleur laptop du moment",
    "http://urltrucmuche.fr"
);

console.log("Article : ", article);

// le fait d'utiliser new, permet au moment ou la fonction s'exécute pour la 1ère fois
// => le moteur JS va : 
// 1/ créer un objet vide
// 2/ grâce à this, à cet objet vide il va rajouter un attribut designation auquel il va affecter valeur du paramètre designation

// si on retire le "new" : ça devient une fonction ordinaire et plus constructeur
// ça veut dire on créer une variable article qui reçoit une valeur 
// mais si on regarde la fonction, ne retourne rien, elle fait juste this.designation = designation etc... 
// donc c'est pour ça qu'on a "undefined" sans le new.
// mais si on regarde désignation, on le retrouve => WTF 
// explication : dans la page en cours, quand elle est chargée, le moteur js va créer un objet
// et cet objet va représenter la fenêtre en cours et va le nommer "window"

// si on explore window : 
// qu'on fasse alerte.("Bonjour") ou window.alert("Bonjour") = pareil 

// toutes les variables qu'on déclare avec motclé var dans scope global 
// ce sont des attributs qu'on rajoute à l'objet global 
// si on écrit this => retourne objet window 

// donc le fait qu'on mette pas le mot-clé new devant article et qu'on utilise le mot clé this dans la fonction 
// le moteur js considère que le this auquel la fonction fait référence, est celui du scope global donc objet window 
// this.designation = window.designation = designation 

// mais le new => va créer son scope à lui, donc le this fera référence au nouvel objet créé dans le contexte de la fonction 


const article2 = new Article(
    "Macbook Pro 16 2021", 
    3500, 
    "Meilleur laptop du moment",
    "http://urltrucmuche.fr"
);

console.log("Article 2 : ", article2);