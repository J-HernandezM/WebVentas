const userEmail= document.querySelector(".navBar__email");
const mobileBurguer= document.querySelector(".menuHamIcon");
const cartIcon= document.querySelector(".navBar__cart");

const menuEmailDesk= document.querySelector(".userMenu");
const menuHamMobile= document.querySelector(".mobileMenu");
const asideCart= document.querySelector(".shoppingCart");



userEmail.addEventListener("click", function(){toggleElement(menuEmailDesk)});
mobileBurguer.addEventListener("click", function(){
    const isAsideCartClosed=asideCart.classList.contains("inactive")
        if(isAsideCartClosed){
            toggleElement(menuHamMobile)
        }
        else{
            asideCart.classList.add("inactive")
            toggleElement(menuHamMobile)
        }
    });
cartIcon.addEventListener("click", function(){
    const isMenuMobileClosed=menuHamMobile.classList.contains("inactive");
        if(isMenuMobileClosed){
            toggleElement(asideCart);
        }
        else {
            menuHamMobile.classList.add("inactive");
            toggleElement(asideCart);
        }
    })


function toggleElement(element) {
    element.classList.toggle("inactive");
}

