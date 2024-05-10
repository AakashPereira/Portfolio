const diceBtn = document.getElementById("game-btn")

diceBtn.addEventListener("click", startGame)

function startGame() {
    let randomNo = Math.floor(Math.random() * 6) + 1
    alert(`You rolled a ${randomNo}! Maybe that will mean something one day 🤷‍♂️`)
}