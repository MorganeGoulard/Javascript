function Article(designation, prixUHT, description, urlImage){
    this.#designation = designation; // # permet que ce soit privé, et que l'écriture passe par setteur
    this.prixUHT = prixUHT; 
    this.description = description; 
    this.urlImage = urlImage; 
    /*this.getPrixTTC=function(){    // si on met la fonction ici, à chaque création de nouvel article
        return "prix TTC";           // on aura la création d'une nouvelle fonction qui fait la même chose à chaque fois 
    }*/                              // et on aura plusieurs méthodes en mémoire inutilement
}

Article.prototype.getPrixTTC=function(){ // prototype => mécanisme qui permet d'avoir des méthodes partagées entre objet et évite d'avoir duplication 
    return this.prixUHT * 1.21;
};

const article = new Article(
    "Macbook Pro 16 2021", 
    3500, 
    "Meilleur laptop du moment",
    "http://urltrucmuche.fr"
);

const article2 = Article(
    "Huawai Mate 20", 
    800, 
    "Parfait",
    "http://urltrucmuche.fr"
);