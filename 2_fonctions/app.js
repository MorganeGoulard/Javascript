// créer une fonction qui rtourne une somme de 2 nombres
function calculSomme(nombre1, nombre2){ //pas besoin du type
    if(typeof nombre1 !== "number" || typeof number2 !== "number"){
        throw new Error("Veuillez entrer des nombres valides");
    }
    return nombre1+nombre2;
}; 
// pour typer les variables en js, on fera avec typescript 

//slugify("macbook pro", "+") ==> "macbook+pro"
//slugify("macbook pro", "*") ==> "macbook*pro"
//slugify("macbook pro", "-") ==> "macbook-pro"
function slugify(str, delimiter){
    const strToLowerCase = str.toLowerCase();
    const strToArray = strToLowerCase.split(" ");
    return strToArray.join(delimiter);
};

// # Anonymous function expression
const slugifyV2 = function (str, delimiter){
    const strToLowerCase = str.toLowerCase();
    const strToArray = strToLowerCase.split(" ");
    return strToArray.join(delimiter);
};
// slugifyv2 contient la référence de la fonction 
// en JS, les fonctions ce sont des objets !!!
// permet d'optimiser des algorithmes 

// # Arrow function 
const slugifyV3=(str, delimiter)=>{
    const strToLowerCase = str.toLowerCase();
    const strToArray = strToLowerCase.split(" ");
    return strToArray.join(delimiter);
};

// créer une fonction qui retourne l'inverse d'une chaine
const reverseStr=function(str){
    return str.split("").reverse().join("");
};

const reverseStrV2 = (str) => {
    return str.split("").reverse().join("");
};

const reverseStrV3 = (str) => str.split("").reverse().join("");




const somme=(... nombres)=>{
    let resultat = 0;
    for(let i = 0 ; i < nombres.length ; i++){
        resultat += nombres[i];
    }
    return resultat;
}
// # rest parametre : on collecte tous les paramètres qu'on rassemble dans un tableau sur lequel on pourra itérer
const sommev2=(... nombres)=>{
    let resultat = 0;
    //for(let i = 0 ; i < nombres.length ; i++){
    //    resultat += nombres[i];
    //}
    // boucle for.. of => proche boucle for each 
    for(let nombre of nombres) // au lieu de for(int nombre : nombres)
    return resultat;
}

//const somme2=(nombre1, nombre2) => nombre1+nombre2;

// quand on lui passe 0 paramètres, il dit NaN (not a number), 
// il va tenter de faire undefined + undefined 
// on peut empêcher ça, on utilisant valeurs par défaut

const somme2 = (nombre1 = 0, nombre2 = 0) => nombre1 + nombre2;