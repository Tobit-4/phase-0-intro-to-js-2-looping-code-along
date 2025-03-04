// Code your solutions in this file
function writeCards(names, event){
    let messages = [];

    for(let i=0; i < names.length; i++){
         messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return messages;
}
const namesArray = ["Guadalupe", "Ollie", "Aki"]
console.log(writeCards(namesArray,"birthday"));
function countDown(number){
    while (number >= 0){
        console.log(number);
        number--;
        
    }
}
countDown(10)
