console.log("1. Nom : ", nom);
let nom="Alain";
console.log("2. Nom : ", nom);

if(true){
    let a=6;
    console.log("a dans IF", a);
}
console.log("A après IF", a);
// en java, ça c'est pas correct 
// mais en JS, toutes les variables var = variables globales

//# alternatives à var : let et const
// let : ne subit pas le hoisting et permet de créer des variables locales
let prenom = "Jules";

// 2. Variables toujours globales
if (true) {
    let a = 6;
    console.log("`a` dans `IF`", a); //6
  }
  // console.log("`a` après `IF` ", a); #erreur

  //avec let on peut déclarer un variable sans l'initialiser
  let pays;