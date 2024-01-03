const closeBtn = document.getElementById("close-btn")

const pageContent = document.getElementById("page-content")

const welcomeModal = document.getElementById("welcome-modal")

closeBtn.addEventListener("click", removeModal)
closeBtn.addEventListener("keypress", function(e) {
    if(e.key == "Enter") {
        removeModal()
    }
})

function removeModal() {
    welcomeModal.style.display = "none"
    pageContent.style.opacity = "1"
    pageContent.removeAttribute("inert")
    pageContent.focus()
}