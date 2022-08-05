import { BASE_URL } from "../constants.js";
import { Api } from "./api.config.js";


export class UsersService{
    constructor(){
        this.url = "/users";
    }

    fetchUsers(){
        return Api.get(this.url).then(function(response){
            return response.data;
        });
    }

    fetchUserById(id){
        return Api.get(this.url + "/" + id).then(function(response){
            return response.data;
        });
    }

}







/*import { BASE_URL } from "../constants.js";


export function fetchUsers(){
    return axios.get(BASE_URL).then(function (response) {
      return response.data;
    });
}

export function fetchUserById(id){
    return axios.get(`${BASE_URL}/${id}`).then(function(response){
        return response.data;
    });
} */