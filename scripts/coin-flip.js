const flipCoin = function (){

    let result = '';
    let randomNum = Math.random();

    if (randomNum <= 1/2){
        result = 'Heads';
    } else {
        result = 'Tails';
    }

    return result

   


}

function resetFlip(){
    document.querySelector('.flip-result').textContent = '';
    document.querySelector('.coin-image').src = '';
    document.querySelector('.coin-image').style.display = 'none';
    

}

function displayResult (result){
   let resultText = document.querySelector('.flip-result');
   let coinImage = document.querySelector('.coin-image');

   resultText.textContent = result;

   if(result === 'Heads'){
    coinImage.src = 'images/heads.webp';
   } else {
    coinImage.src = 'images/Tails.png';
   }
   coinImage.style.display = 'block';

}

function handleFlip(){
    const result = flipCoin();
    displayResult(result);
}


document.querySelector('.flip-button').addEventListener('click', handleFlip);
document.querySelector('.reset-flip').addEventListener('click', resetFlip);
