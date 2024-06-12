let isAlive = false
let blackJack = false
let cards = []
let sum = 0
let infoEl = document.getElementById('info-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')

function getRandomNum(){
    let randomNum = (Math.floor(Math.random() * 13)) + 1
    if(randomNum > 10){
        return 10
    } else if(randomNum === 1){
        return 11
    } else {
        return randomNum
    }
}

function startGame(){
    isAlive = true
    sum = 0
    let firstCard = getRandomNum()
    let secondCard = getRandomNum()
    cards = [firstCard, secondCard]
    cardsEl.textContent = 'Cards: ' + cards[0] + ' ' + cards[1]
    renderGame()
}

function renderGame(){
    sum = 0
    for (let i = 0; i < cards.length; i++){
        sum += cards[i]
    }
    sumEl.textContent = "Sum: " + sum
    if(sum < 21){
        infoEl.textContent = 'Do you want to draw a new card?'
    } else if(sum === 21) {
        infoEl.textContent = "You've got Blackjack!"
        blackJack = true
    } else{
        infoEl.textContent = "You're out of the game!"
        isAlive = false
    }
}

function newCard() {
    if(isAlive && !blackJack){
        let card = getRandomNum()
        cards.push(card)
        cardsEl.textContent += ' ' + card
        renderGame()
    }
}



