const copyrightYearEl = document.getElementById("copyright-year")
copyrightYearEl.textContent = new Date().getFullYear()

const hamburgerBtn = document.getElementById("hamburger-btn")

const mobileMenu = document.getElementById("mobile-menu")

hamburgerBtn.addEventListener("click", function() {
    mobileMenu.classList.toggle("hidden")
})