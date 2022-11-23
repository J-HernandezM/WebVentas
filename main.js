const menuEmailDesk= document.querySelector(".userMenu");
const userEmail= document.querySelector(".navBar__email");

userEmail.addEventListener("click", toggleElement);

function toggleElement() {
    menuEmailDesk.classList.toggle("inactive");
}

