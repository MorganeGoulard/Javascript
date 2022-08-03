class Article{
    constructor(designation, prixUHT, description, urlImage) {
        this.designation = designation; 
        this.prixUHT = prixUHT; 
        this.description = description; 
        this.urlImage = urlImage;
    }

    getDesignation(){
        return this.designation;
    }

    setDesignation(designation){
        this.designation = designation;
    }

    // permet de rester sur le modèle vu en java 
    // il existe des get et set propre à js, mais pour l'instant on reste sur modèle java 

    getPrixTTC() {
        return this.prixUHT * 1.21;
    }


}

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