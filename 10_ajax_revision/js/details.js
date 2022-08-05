 
import { BASE_URL } from "./constants.js";
import { UserDetails } from "./component/user-details.js";

const urlParams = new URLSearchParams(location.search);
//location = page dans laquelle on se situe actuellement

const id = urlParams.get("id");
// dans get("") on met le paramètre qu'on a créé 
// chaque paramètre on récupère individuellement 

const userDetails = document.querySelector("#user-details")

axios
  .get(`${BASE_URL}/${id}`)
  .then(function (response) {
    const user = response.data
    userDetails.innerHTML = UserDetails(user);
    // userDetails c'est un String donc on ne fait pas appendChild
  });