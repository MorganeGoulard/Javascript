// creation d'un tableau vide 
const fruits = [];
const fruits2 = new Array();

//insérer des données à la fin du tableau
//.push(element) : retourne la nouvelle taille du tableau après l'insertion
fruits.push("pomme");
fruits.push("banane")

// création et initialisation
const noms=["christian", "Steven", "Maeva", "Jordan", "Morgane"];


// on peut insérer des données à la fin du tableau avec .push
// on manipule le tableau référencé par le tableau fruits

// accès 
fruits[0]; // pomme 
noms[1]; // steven

//retirer un élément à la fin du tableau 
fruits.pop();
// const elementRetire = fruits.pop();
// elementRetire = "banane"; 

// unshift() : ajouter un élement au début du tableau 
fruits.unshift("framboise");
// => fruits = [framboise, pomme, banane]

//shift() : retirer un élément au début du tableau
fruits.shift();
// => fruits = [pomme, banane]
// on peut aussi mettre d'élément retiré dans un const car il le retourne

// toutes les opérations sur le début du tableau sont couteuses en terme de méthode 
// car recalcule des index pour chaque éléments 
// alors que push et pop n'effectue qu'une seule opération 

const somme=(... nombres)=>{
    let resultat = 0;
    for(let nombre of nombres) 
    return resultat;
}
// Runtime de 0(n) même si ligne 40 et 42 c'est 0(1) car constant
// le nombre d'instruction augmente en fonction de la taille de l'input, c'est linéaire 
// Space complexity O(n)

// ==> donc pour shift et unshift() on aura O(n)
// et pour push() et pop() on aura O(1)

