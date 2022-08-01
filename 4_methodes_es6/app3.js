const noms = [
    "Alain Delon", 
    "Jean zozor", 
    "Alain Deloin", 
    "Marie Dupont", 
    "Michel Sardou" 
];

const nomRecherche = prompt("Entrer le nom à rechercher : ");
const nom = noms.find(function (nom){
    return nom.startsWith("Al");
})