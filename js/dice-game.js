const diceBtn = document.getElementById("dice-btn")

diceBtn.addEventListener("click", function() {
    let randomNo = Math.floor(Math.random() * 6) + 1
    alert(`You've rolled a ${randomNo}! One day that will mean something 🤞`)
})