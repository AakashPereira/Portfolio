const closeAlertBtn = document.getElementById("alert-close-btn")
const alertEl = document.getElementById("alert-el")
const logoEl = document.getElementById("logo-el")

closeAlertBtn.addEventListener("click", function() {
    alertEl.style.display = "none";
    logoEl.focus();
})