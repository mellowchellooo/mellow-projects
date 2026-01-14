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
