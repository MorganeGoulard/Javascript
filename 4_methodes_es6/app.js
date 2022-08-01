const fruits = ["pomme", "banane", "orange"];

// écrire un code qui permet de mettre au pluriel les noms des fruits

// 1ère approche : boucle for classique 
const fruitsPluriel = [];
for(let i=0; i<fruits.length; i++){
    // si [i]=0, fruits[i] = pomme + s => pommes 
    fruitsPluriel.push(fruits[i]+"s");
}

// boucle for .. of
const fruitsPluriel2 = [];
for (let fruit of fruits){
    fruitsPluriel2.push(fruit + "s");
}

// boucle forEach
const fruitsPluriel3 = [];
fruits.forEach(function(fruit){ // on peut aussi passer 2 arguments, genre fruit et index (function(fruit, index))
    fruitsPluriel3.push(fruit + "s");
}) 

// boucle spécialisée dans création de nouveaux tableaux : .map()
const fruitsPlurielMap = fruits.map(function(fruit){
    return fruit+"s";
})  
// pour cq itération sur tableau fruits, map() va : 
//1. créer un tableau en mémoire 
//2. pour cq itération dans map(), il va insérer la valeur retourner dans le tableau du point(1)
//3. à la fin de sa boucle, la variable 'fruitsPlurielMap' reçoit le nouveau tableau 