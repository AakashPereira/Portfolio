const gameBtn = document.getElementById("gameBtn")

gameBtn.addEventListener("click", function() {
    let randomNo = Math.floor(Math.random() * 6) + 1
    alert(`You rolled a ${randomNo}. It would be good if that meant something right? 🤔`)
})