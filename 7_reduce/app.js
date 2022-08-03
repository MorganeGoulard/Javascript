const nombres = [1, 2, 3, 34, 45, 56, 6];

// calcul somme des éléments du tableau 
// boucle for of 
const somme = 0;
for (let nombre of nombres){
    somme += nombre;
}
console.log("somme = ", somme);

// boucle for each 
somme=0;
nombres.forEach((nombre) => (somme += nombre));

// méthode reduce
somme=0;
somme=nombres.reduce(function(accumulateur, nombre){
    return accumulateur + nombre;
},0)

//Lisy<String> str = new ArrayList(List.AsList(2,3,4,5,56)) en java :
//nombres.stream().map(nombre->Math.po<(nombre, 2))