const article1 = {
    nom : "Macbook Pro 16 2021",
    fabricant: "Apple",
    prix: 3500,
    description: "Meilleur laptop du moment",
    quantiteStock: 670
};

// Accéder aux attributs
console.log("nom : ", article1.nom);
console.log("fabricant : ", article1.fabricant);

// modifier les attributs 
article1.nom = "Macbook Pro 13 2020 M1";

// JSON : JavaScript Object Notation 

const articles = [
    {
        id:1,
        nom : "Macbook Pro 16 2021",
        fabricant: "Apple",
        prix: 3500,
        description: "Meilleur laptop du moment",
        quantiteStock: 670
    },
    {
        id:2,
        nom : "Macbook Pro 13 2020 M1",
        fabricant: "Apple",
        prix: 3000,
        description: "Produit d'avant",
        quantiteStock: 100 
    }
]

for(let article of articles){
    console.log("nom : ", article.nom);
    console.log("fabricant : ", article.fabricant);
    console.log("prix : ", article.prix);
}

// changer le squelette du tableau 
const article2 = articles.map(function(article) {
    return {
        id:article.id,
        designation: `${article.fabricant} ${article.nom}`,
        prix : `${article.prix}`
    }
})

// destructuration 
const article3 = articles.map(function({ id, fabricant, nom, prix}) {
    return {
        id,
        designation : `${fabricant} ${nom}`,
        prix: `${prix} €`
    }
})

const article4 = articles.map(({id, fabricant, nom, prix}) => ({
    id, 
    designation: `${fabricant} ${nom}`,
    prix: `${prix} €`
}))

