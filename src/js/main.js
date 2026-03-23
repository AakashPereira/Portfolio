const copyrightYearEl = document.getElementById("copyright-year")
copyrightYearEl.textContent = new Date().getFullYear()

const hamburgerBtn = document.getElementById("hamburger-btn")

const mobileMenu = document.getElementById("mobile-menu")

hamburgerBtn.addEventListener("click", function() {
    let hamburgerExpandedState = hamburgerBtn.getAttribute("aria-expanded") === "true"
    mobileMenu.classList.toggle("hidden")
    hamburgerBtn.setAttribute("aria-expanded", `${!hamburgerExpandedState}`)
})