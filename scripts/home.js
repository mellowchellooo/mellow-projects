




const flipCoin = function (){
    let randomNum = Math.random();
    let coinResult = ''

    if (randomNum <= 1/2){
         coinResult = 'Heads';
    } else if (randomNum > 1/2){
        coinResult = 'Tails'
    }
    return coinResult
}

function showResult (){
    const result = flipCoin();
    document.getElementById('flip-result').textContent = result;
}

document
  .querySelector('.flip-button')
  .addEventListener('click', showResult);