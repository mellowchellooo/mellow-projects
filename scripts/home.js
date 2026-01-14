
//this is the function for heads or tails
const flipCoin = function (){

    let result = '';
    let randomNum = Math.random();

    if (randomNum <= 1/2){
        result = 'Heads';
    } else {
        result = 'Tails';
    }

    document.querySelector('.flip-result').textContent = result;
}

function resetFlip(){
    let result = '';
    document.querySelector('.flip-result').textContent = result;
}

document.querySelector('.flip-button').addEventListener('click', flipCoin);
document.querySelector('.reset-flip').addEventListener('click', resetFlip);

//this is the functions for rock paper scissor game 

function computerMove (){
    let computerMove = '';
    let randomNum = Math.random();

    if(randomNum <= 1/3){
        computerMove = 'rock';
    } else if(randomNum > 1/3 && randomNum <= 2/3){
        computerMove = 'paper';
    } else if (randomNum > 2/3 && randomNum <= 1){
        computerMove = 'scissor'
    }

    return computerMove
}


function playGame(playerMove){
    let result = '';
    const move = computerMove();

    if (playerMove === 'rock'){
        if(move === 'rock'){
            result = 'Tie';
        } else if(move === 'paper'){
            result = 'You Lose';
        } else if (move === 'scissor'){
            result = 'You Win';
        }
    } else if(playerMove === 'paper'){
        if (move === 'rock'){
            result = 'You Win';
        } else if (move === 'paper'){
            result = 'Tie';
        } else if (move === 'scissor'){
            result = 'You Lose';
        }
    } else if (playerMove === 'scissor'){
        if(move === 'rock'){
            result = 'You Lose';
        } else if (move === 'paper'){
            result = 'You Win';
        } else if (move === 'scissor'){
            result = 'Tie';
        }
    }

    document.querySelector('.rock-paper-scissor-result').textContent = `You chose ${playerMove}. Computer chose ${move}. ${result}`
}

document.querySelector('.rock-button').addEventListener('click', () => playGame('rock'));
document.querySelector('.paper-button').addEventListener('click', () => playGame('paper'));
document.querySelector('.scissor-button').addEventListener('click', () => playGame('scissor'));



