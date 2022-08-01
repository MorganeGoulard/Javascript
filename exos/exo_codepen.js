// E1
const users1 = [
    { noms: 'Jojo Jack', age: 21 },
    { noms: 'Paul-Jules', age: 45 },
    { noms: 'Pierre Zozor', age: 67 },
    { noms: 'Gilbert Toto', age: 39 },
    { noms: 'Simon Pierre', age: 35 },
    { noms: 'Andres Iniesta', age: 70 }
  ];
  /**
   * 1 - Avoir un tableau des users dont l'age varie entre 20-40
   * 2 - Recuprerer le user dont noms est Pierre Zozor
   * 3 - Recupere un tableau ne contenant que les noms des utilisateurs
   */

 //1
  const usersAgeBetween2040 = users1.filter(function (user){
      return user.age <= 40 && user.age >= 20;
  })

//2
const userToFind = users1.find(function (user){
    return user.noms.endsWith("zor");
})

//3 
const usersByName = users1.map(function({noms}) {
return {
    noms
}})

//----------------------------------

// E2
const users = [
    {
      id: 1,
      sexe: 'M',
      nom: 'Lisangola',
      prenom: 'Bondjali',
      nationalite: 'Allemande'
    },
    {
      id: 2,
      sexe: 'M',
      nom: 'Alain',
      prenom: 'Stanislas',
      nationalite: 'Bresilienne'
    },
    { id: 3, 
        sexe: 'M', 
        nom: 'Kavov', 
        prenom: 'Joseph', 
        nationalite: 'Russe' },
    {
      id: 4,
      sexe: 'M',
      nom: 'Jean',
      prenom: 'Jonathan',
      nationalite: 'Francaise'
    },
    {
      id: 5,
      sexe: 'F',
      nom: 'Lisangola',
      prenom: 'Alain',
      nationalite: 'Italienne'
    },
    {
      id: 6,
      sexe: 'F',
      nom: 'Sakura',
      prenom: 'Josephine',
      nationalite: 'Bresilienne'
    },
    { id: 7, sexe: 'M', nom: 'Le Blanc', prenom: 'Axel', nationalite: 'Italienne' },
    {
      id: 8,
      sexe: 'M',
      nom: 'Alison',
      prenom: 'Murdoch',
      nationalite: 'Somalienne'
    },
    { id: 9, sexe: 'F', nom: 'Zarosky', prenom: 'Semia', nationalite: 'Russe' },
    {
      id: 10,
      sexe: 'F',
      nom: 'Ali',
      prenom: 'Laurene',
      nationalite: 'Algerienne'
    }
  ];
  
  // 1 - Trouver le nombre des Algeriens dans notre collection

  const algeriens = users.filter(function(user){
      return user.nationalite === "Algerienne";
  })

  //2 - Trouver toutes les personnes dont les prenoms se terminent par a
  const usersFirstNameEndWithA = users.filter(function(user){
      return user.prenom.endsWith("a");
  })

  //3 - Avoir la liste tous toutes les noms
  const usersByLastName = users.map(function({nom}) {
    return {
        nom
    }})

  //4 - La liste de tous les hommes russes

  const russians = users.filter(function(user){
      return user.nationalite === "Russe";
  })

  //5 - La liste de toutes les personnes dont les noms commencent par K et qui sont des femmes

  const womenWithK = users.filter(function(user){
      return (user.sexe === "F" && user.nom.startsWith("K"));
  })
  

  //6 - La liste de tous les hommes dont les noms commencent par M
  const menWithM = users.filter(function(user){
      return (user.sexe === "M" && user.nom.startsWith("M"));
  })
  
  


