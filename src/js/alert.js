const closeAlertBtn = document.getElementById("alert-close-btn")
const alertEl = document.getElementById("alert-el")

closeAlertBtn.addEventListener("click", function() {
    alertEl.style.display = "none";
})