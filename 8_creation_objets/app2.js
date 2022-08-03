const equipe = ["Messi", "Et'o", "Thierry Henry", "Iniesta", "Xavi"];

const real = {
    equipe : ["C. Ronaldo", "Benzema", "Modric", "Ramos"],
    getEquipe: function(){        // dans un objet, toujours mettre : au lieu de =
        return this.equipe;
    },
    getEquipe2:()=>{ // ici c'est arrow function 
        return this.equipe;
    },

    getEquipe3:function(){
        return ()=> {
            return this.equipe
        }
    },

    getEquipe4:function () {
        afficherEquipe.bind(this)(); // dans ce contexte, this c'est l'objet en cours, donc bind(this) va permettre de lier l'objet en cours
    }                                // on rajoute () pour appeler la fonction afficherEquipe
};


// à partir du moment ou on manipule le this, cad qu'on lit l'objet au contexte
// arrow function devient dangereux
// contrairement aux fonctions avec mot clé function, n'ont pas leur propre référence de this 
// qd on dit à arrow function d'aller chercher un contexte, il ne voit que window 
// toz le contexte de real, il va chercher dans scope global 

function afficherEquipe(){
    this.equipe.forEach(joueur => {
        console.log(joueur)
    });
}

// en JS, une fonction = un objet 

//getEquipe3 
// une fonction crée son propre scope, un nouveau contexte 
// si on appelle getEquipe3 on aura le real, 
// mais si on compare à getEquipe1, bcp + compliqué 
