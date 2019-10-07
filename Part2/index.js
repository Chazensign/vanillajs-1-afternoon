
let strength = document.getElementById("idInput")
let suit = document.getElementById("suitInput")
let strengthArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']


function setCard() {
    let card = document.getElementById(suit.value)
    for (let i = 0; i < 13; i++) {
        if (strength.value[0].toUpperCase() === strengthArr[i]) {
            let newSuit = document.querySelectorAll(`.${suit.value.toLowerCase()}`)
            newSuit.innerText = strength.value[0].toUpperCase()
            newSuit[1].innerText = strength.value[0].toUpperCase()
            if (suit.value.toLowerCase() === 'spades' || suit.value.toLowerCase() === 'clubs') {
                card.style.color = 'black'
            } else {
                card.style.color = 'red'
            }
        }
    }
}




