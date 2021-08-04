const cards = document.querySelectorAll('.mushroom-card');
const fadeIn = document.querySelector('.animated');
let hasFlippedCard = false;
let numOfCards = cards.length;
let firstCard, secondCard;
let cardsFlipped = 0;
let lockBoard = false;
let lowScore = localStorage.getItem('low-score');



if(lowScore) {
    document.getElementById('best-Score').innerText = lowScore;
}


function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

        secondCard = this;

        
            checkForMatch()
        }
        
    

function checkForMatch(){
    
    let isMatch = firstCard.dataset.est === secondCard.dataset.est;

    isMatch ? disableCards() : unFlipCards();

    
    if(isMatch){
        let talkSlide = document.querySelector('.talkingMushSlide');
        let textSlide = document.querySelector('.textSlide');
        let text2Slide = document.querySelector('.text2Slide');
        let mush = document.querySelector('.funnyMush');
        mush.className = 'funnyMushArrives';
        textSlide.className = 'text';
        text2Slide.className = 'text2';
        talkSlide.className = 'talkingMush';
    
    }
    
    console.clear()
}


function disableCards(){
    
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
        resetBoard();
}


function unFlipCards(){
    lockBoard = true;
    
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        resetBoard();
        },1500)
        

}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null]
}

(function shuffle(){
    cards.forEach(card => {
        let randomPs = Math.floor(Math.random() * 12)
        card.style.order = randomPs;
    })
})();

function endGame(){
    let end = document.getElementById('end');
}






cards.forEach(card => card.addEventListener('click', flipCard))

const cardshadow = document.querySelectorAll('.mushroom-card')

