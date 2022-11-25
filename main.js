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

const productList=[]
class Products{
    constructor(productName, productImage , productPrice){
        this.name=productName
        this.image=productImage
        this.price=productPrice
    }
}
let productPkmGame = new Products ("Pokemon games", "./assets/pkm-cards.jpg", 120)
let productTogepiAirpods = new Products ("Togepi airpods", "./assets/pkm-headphones.jpg", 120)
productList.push(productPkmGame)
productList.push(productTogepiAirpods)

renderProducts(productList)
function renderProducts(array){
    for (i=0; i<10; i++){
        for (product of array){
            const cardsContainter= document.querySelector(".cards-container")
            let productCardStructure= `<div class="product-card">
                                            <img src="${product.image}" alt="pokemon games" class="product-img">
                                            <div class="product-info">
                                                <div class="product-texts">
                                                    <p class="text price">$ ${product.price},00</p>
                                                    <p class="text pdctname">${product.name}</p>
                                                </div>
                                                <figure>
                                                    <img src="./assets/Icons/bt_add_to_cart.svg" alt="add to cart" class="card-logo">
                                                </figure>
                                            </div>
                                        </div>`
            cardsContainter.innerHTML+=productCardStructure
        }
    }
}

{/* <div class="product-card">
                    <img src="./assets/pkm-cards.jpg" alt="pokemon games" class="product-img">
                    <div class="product-info">
                        <div class="product-texts">
                            <p class="text price">$ 120,00</p>
                            <p class="text pdctname">Pokemon games</p>
                        </div>
                        <figure>
                            <img src="./assets/Icons/bt_add_to_cart.svg" alt="add to cart" class="card-logo">
                        </figure>
                    </div>
            </div>
            <div class="product-card">
                    <img src="./assets/pkm-headphones.jpg" alt="pokemon games" class="product-img">
                    <div class="product-info">
                        <div class="product-texts">
                            <p class="text price">$ 300,00</p>
                            <p class="text pdctname">Togepi airpods</p>
                        </div>
                        <figure>
                            <img src="./assets/Icons/bt_add_to_cart.svg" alt="add to cart" class="card-logo">
                        </figure>
                    </div>
            </div> */}