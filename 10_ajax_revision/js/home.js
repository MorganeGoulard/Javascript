import { UsersList } from "./component/user-card/users-list.js";
import { UsersService } from "./services/users.service.js";



//const usersCards = document.querySelector("#users");

/*axios
  .get(BASE_URL)
  .then(function (response) {
    const users = response.data;
    for (let user of users) {
      const card = UserCard(user);
      usersCards.appendChild(card);
    }
  });*/

class HomePage{
  constructor(){
    //this.$usersCards=document.querySelector("#users"); // usersCard représente un élement du DOM = interface utilisateur
                                                      //$ : convention pour dire qu'on parle d'un objet du DOM
    // ligne au-dessus on le met dans users-list.js
    this.UsersService = new UsersService();
    this.users = []; // données de la page d'accueil, mais pour l'instant tableau vide car on a pas encore fait l'appel HTTP pour récup liste users 
  }

  async main(){
        // on attend que la promesse soit résolue avant que le reste s'exécute 
    // => on passe a une exécution synchrone, alors qu'avant le reste s'exécutait 
    // mais comme appel réseau asynchrone, le tableau users pas récupéré 
    this.users = await this.UsersService.fetchUsers();
    const usersList = new UsersList(this.users);
    usersList.render();
    
  }
}

const homePage = new HomePage();
homePage.main();

// grâce à tout ça, home devient un utilisateur de service 
// et il n'y a plus de mélange code métier / affichage 
