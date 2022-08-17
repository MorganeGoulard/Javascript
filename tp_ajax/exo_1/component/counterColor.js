export function counterColor(number, parsedNumber){
    if(parsedNumber === 0){
        number.style.color = "#000000"
    } else if (parsedNumber > 0){
        number.style.color = "#00A405"
    } else if (parsedNumber < 0){
        number.style.color = "#FF0000"
    }
}