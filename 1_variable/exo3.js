let secretNumber = prompt("Définissez un nombre entre 10 et 20");
let number = prompt("Saississez un nombre entre 10 et 20");

while(true)
{
    if(number == secretNumber){
        alert(`Félicitations !`);
        break;
    } else if (number<secretNumber){
        alert(`Plus grand !`);
        number = prompt("Saississez un nombre entre 10 et 20");
    }else if (number>secretNumber){
        alert(`Plus petit !`);
        number = prompt("Saississez un nombre entre 10 et 20");
    }
}