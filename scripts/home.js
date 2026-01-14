


function computerHeadsOrTails(){
    let randomNum = Math.random();
    let computerMove = ''

    if (randomNum <= 1/2){
         computerMove = 'Heads';
    } else if (randomNum > 1/2){
        computerMove = 'Tails'
    }
    return computerMove
}