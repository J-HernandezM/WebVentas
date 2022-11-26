const userEmail= document.querySelector(".navBar__email");
const mobileBurguer= document.querySelector(".menuHamIcon");
const cartIcon= document.querySelector(".navBar__cart");

const menuEmailDesk= document.querySelector(".userMenu");
const menuHamMobile= document.querySelector(".mobileMenu");
const asideCart= document.querySelector(".shoppingCart");
const asideProduct= document.querySelector(".productDetail");
const asideCloseBtn=document.querySelector(".productDetail__icon");


//Creación de clase y objetos
const productList=[]
class Products{
    constructor(productName, productImage , productPrice, productID){
        this.name=productName
        this.image=productImage
        this.price=productPrice
        this.id=productID
    }
}
let productPkmGame = new Products ("Pokemon games", "./assets/pkm-cards.jpg", 120, "gamesPokemon");
let productTogepiAirpods = new Products ("Togepi airpods", "./assets/pkm-headphones.jpg", 500, "airpodsTogepi");
let productCardPack = new Products ("4 Cards Pack", "./assets/card-pack.jpg", 220, "cardsPack");
let productCardVapo = new Products ("Vaporeon Card", "./assets/card-vaporeon.jpg", 12, "cardVapo");
let productCardChar = new Products ("Charizard Card", "./assets/card-charizard.jpg", 1200, "cardChari");
let productToyChar = new Products ("Charmander Toy", "./assets/toy-charmander.jpg", 50, "charmanderToy");
let productGBA = new Products ("Game Boy", "./assets/gba.jpg", 560, "gameboy");
let productGameRed = new Products ("Pokemon Red", "./assets/pkm-game-red.jpg", 60, "pkmGameRed");
let productGameYellow = new Products ("Pokemon Yellow", "./assets/pkm-game-yellow.jpg", 60, "pkmGameYellow");
let productPkmFigures = new Products ("Pokemon Figures", "./assets/pkm-figures.jpg", 5, "pkmFigures");
let productPkmLamp = new Products ("Pokemon Lamp", "./assets/pkm-lamp.jpg", 12, "pkmLamp");


productList.push(productPkmGame);
productList.push(productTogepiAirpods);
productList.push(productCardPack);
productList.push(productCardVapo);
productList.push(productCardChar);
productList.push(productToyChar);
productList.push(productGBA);
productList.push(productGameRed);
productList.push(productGameYellow);
productList.push(productPkmFigures);
productList.push(productPkmLamp);

//Lógica convivencia componentes, abrir y cerrar
userEmail.addEventListener("click", function(){toggleElement(menuEmailDesk)});
mobileBurguer.addEventListener("click", function(){
        const isAsideProductDetailClosed=asideProduct.classList.contains("inactive");
        const isAsideCartClosed=asideCart.classList.contains("inactive");
        if(isAsideCartClosed && isAsideProductDetailClosed){
            toggleElement(menuHamMobile);
        }
        else{
            asideProduct.classList.add("inactive")
            asideCart.classList.add("inactive");
            toggleElement(menuHamMobile);
        }
    });
cartIcon.addEventListener("click", function(){
        const isMenuMobileClosed=menuHamMobile.classList.contains("inactive");
        const isAsideProductDetailClosed=asideProduct.classList.contains("inactive");

        if(isAsideProductDetailClosed && isMenuMobileClosed ){
            toggleElement(asideCart);
            console.log(1)
        }
        else{
            asideProduct.classList.add("inactive");
            menuHamMobile.classList.add("inactive");
            toggleElement(asideCart);
            console.log(2)
        }
    })
asideCloseBtn.addEventListener("click", closeDetail)


function openDetail(){
    const isMenuMobileClosed=menuHamMobile.classList.contains("inactive");
    const isAsideCartClosed=asideCart.classList.contains("inactive");
    if(isAsideCartClosed && isMenuMobileClosed){
    asideProduct.classList.remove("inactive");
    }
    else{
        asideCart.classList.add("inactive")
        menuHamMobile.classList.add("inactive")
        asideProduct.classList.remove("inactive")
    }
    /* renderProductDetail() */
}
function closeDetail(){
    asideProduct.classList.add("inactive")
}
function toggleElement(element) {
    element.classList.toggle("inactive");
}

//Lógica crear productos dinámicamente y añadirles su escuchador
let productsObject;
renderProducts(productList);
function renderProducts(array){
    for (i=0; i<1; i++){
        for (product of array){
            const cardsContainter= document.querySelector(".cards-container");
            let productCardStructure= `<div class="product-card">
                                            <img src="${product.image}" alt="${product.name}" class="product-img" id="${product.id}">
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
            cardsContainter.innerHTML+=productCardStructure;
        }
    }
    productsObject=document.querySelectorAll(".product-img");
    productDetailEventListeners(productsObject);
}
function productDetailEventListeners(objectArray){
    objectArray.forEach((object) =>{
         object.addEventListener("click", openDetail);
        })
}
/* function renderProductDetail(){
    let detailStructure= `<div class="layoutBottom">
                            <img src="./assets/Icons/icon_close.png" alt="close" class="productDetail__icon close">
                            <img src="./assets/pkm-cards.jpg" alt="pokemon games" class="productDetail__itemImage">
                            <div class="productDetail__pointContainer">
                                <div class="productDetail__points"></div>
                                <div class="productDetail__points"></div>
                                <div class="productDetail__points"></div>
                            </div>
                            <div class="productDetail__productInfo">
                                <p class="productDetail__itemPrice sampleText">$ 120,00</p>
                                <p class="productDetail__itemTitle sampleText">Pokemon games</p>
                                <p class="productDetail__itemDescription sampleText">Cartuchos para GameBoy color de los reconocidos juegos de la primera generación de pokémon. Contiene pokemon rojo, azul y amarillo. Revive una clásica aventura. Compatible con Nintendo Switch.</p>
                            </div>
                        </div>
                        <button class="productDetail__btnPrimary" type="submit"><img src="./assets/Icons/bt_add_to_cart.svg" alt="cart" class="productDetail__icon cart"><span>Add to cart</span></button>`
    asideProduct.innerHTML+=detailStructure }*/
