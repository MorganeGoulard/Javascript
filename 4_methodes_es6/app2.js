const nombres=[2, 5, 67, 8, 56, 19, 33];
const nombresSup20 = nombres.map(function(nombre){
    if(nombre >= 20){
        return nombre;
    }
})
// va retourner un tableau de même taille, mais pour les éléments 
// qui ne remplissent pas la condition, undefined 
// mauvaise utilisation de map()

const nombresSup20V2 = nombres.filter(function(nombre){
    return nombre >= 20;
});

const fruits = ["oranges", "mangues", "goyave", "pomme", "citron"];
const fruitsSingulier = fruits.filter(function(fruit){
    return !fruit.endsWith("s")
})