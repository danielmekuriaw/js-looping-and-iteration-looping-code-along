// Code your solutions in this file

function writeCards(array, text){
    let result = []
    for(let index = 0; index < array.length; index++){
        result.push(`Thank you, ${array[index]}, for the wonderful ${text} gift!`)
    }

    return result
}

function countDown(number){
    while(number >= 0){
        console.log(number)
        number = number - 1
    }
}