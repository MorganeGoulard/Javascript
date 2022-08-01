let nombreTentative = 5
let email = prompt("Veuillez définir votre émail : ");
let mdp = prompt("veuillez définir votre mot de passe : ");

for(let i=nombreTentative; i>= 0; i--){
    let emailConsole = prompt("Veuillez entrer votre email : ");
    let mdpConsole = prompt("Veuillez rentrer votre mot de passe : ");
    if(emailConsole === email && mdpConsole === mdp){
        alert("Bienvenue dans votre espace cient");
        break;
    } else {
        alert(`Identifiants incorrects, il vous reste ${i-1} tentatives`);
    }
    if(i===0){
        alert("Vous avez saisi de mauvais identifiants 5 fois, votre compte est bloqué");
    }
    
}