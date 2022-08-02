/* 
Exo 1 :
On vous donne un tableau d'entiers et un entier K comme arguments. 
Retournez un nouveau tableau contenant uniquement les entiers qui sont à K éléments de la fin du tableau.
Supposez que le tableau d'arguments aura toujours une taille d'au moins K entiers.
 */

const newTabFromK = (tab, k)=>{
    tabFromK = [];
    for(let i = 0 ; i < tab.length ; i++ ){
        if(i >= (tab.length - k)){
            tabFromK.push(tab[i])
        }
    }
    return tabFromK;
};

/* 
Exo2 : 
On vous donne en argument un tableau d'entiers non négatifs. 
Retournez le premier élément trouvé dans le tableau dont l'indice est égal à sa valeur.
*/

const function2 = (tab)=>{
    let numberToReturn;
    for(let i = 0 ; i < tab.length ; i++ ){
        if(i === tab[i]){
            numberToReturn = i;
            break;
        }
    }
    return numberToReturn;
};

/*
Exo3
On vous donne une chaîne de caractères et un nombre entier K comme arguments.
Divisez la chaîne de caractères en un tableau de chaînes de caractères, où chaque élément n'a pas plus de K caractères. 
Retournez le tableau résultant.
La chaîne en argument sera toujours d'au moins K caractères.
*/

const function3 = (str, k)=>{
    const table = [];
    for(let i = 0; i <= str.length - 1; i = i + k)
    {
        table.push(str.slice(i,i + k));
    }
    return table;
};

//Exo4
/* On vous donne un tableau d'entiers et un entier K comme arguments. Retournez l'élément qui est le Kème indice à partir de la fin du tableau.
Supposez que la longueur du tableau d'arguments sera toujours au moins égale à K + 1.
*/

const function4 = (tab, k)=>{
    const reverseTab = tab.reverse();
    const numberK = reverseTab[k];
    return numberK;
}

//Exo5 
/* On vous donne un tableau d'entiers et un entier K comme arguments. 
Retourner vrai si chaque entier est un multiple pair de l'entier K.
*/

const function5 = (tab, k)=>{
    return tab.every(nombre=>nombre % k === 0 && nombre % 2 === 0 );
};

//Exo6
/*On vous donne un tableau d'entiers et un tableau plus court contenant une séquence d'entiers comme arguments. 
Retourner vrai si la séquence d'entiers peut être trouvée dans le premier tableau.
*/ 

const function6 = (tab1, tab2)=>{
    return tab1.includes(tab2);
}

// exo7
function rotateTable(tab, k){
    const rotatedArray=[... tab]; // on ne copie pas la référence de tab, on copie simplement les valeurs mais avec référence différente
    let compteur=0;
    while(compteur<k){
        let derniereValeur = rotatedArray.pop();
        rotatedArray.unshift(derniereValeur); // il ne faut jamais modifier un paramètre qu'on reçoit directement, mauvaise pratique
        compteur++;
    }
    return tab;
}