const closeBtn = document.getElementById("close-btn")

const pageContent = document.getElementById("page-content")

const welcomeModal = document.getElementById("welcome-modal")

const welcomeModalSeen = localStorage.getItem("welcomeModalSeen");

if(!welcomeModalSeen) {
    welcomeModal.style.display = "block";
} else {
    viewIndex()
}

closeBtn.addEventListener("click", removeModal)

closeBtn.addEventListener("keypress", function(e) {
    if(e.key == "Enter") {
        removeModal()
    }
})

function removeModal() {
    localStorage.setItem("welcomeModalSeen", "true")
    welcomeModal.style.display = "none"
    viewIndex()
    pageContent.focus()
}

function viewIndex() {
    pageContent.style.opacity = "1"
    pageContent.removeAttribute("inert")
}