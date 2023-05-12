const menuEmail = document.querySelector('.navbar-email');
const menuDes = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const menuMovil = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCar = document.querySelector('.product-shopping');



menuEmail.addEventListener('click', toggleMenuDes);

function toggleMenuDes() {
    const isAsideClosed = shoppingCar.classList.contains('inactive');
    if(!isAsideClosed) {
        shoppingCar.classList.add('inactive');
    }

    menuDes.classList.toggle('inactive');
}

menuBurger.addEventListener('click', toggleMenuMov);

function toggleMenuMov() {
    const isAsideClosed = shoppingCar.classList.contains('inactive');
    if(!isAsideClosed) {
        shoppingCar.classList.add('inactive');
    }

    menuMovil.classList.toggle('inactive');
};

menuCarritoIcon.addEventListener('click', toggleMenuCarrito);

function toggleMenuCarrito() {
    const isMovilMenuClosed = menuMovil.classList.contains('inactive');
    const isMenuDesClosed = menuDes.classList.contains('inactive');
    if(!isMovilMenuClosed || !isMenuDesClosed) {
        menuMovil.classList.add('inactive');
        menuDes.classList.add('inactive');
    }
    shoppingCar.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Moto',
    price: 400,
    image: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_1280.jpg'
})

productList.push({
    name: 'Carro',
    price: 600,
    image: 'https://cdn.motor1.com/images/mgl/X48rl/s1/1967-shelby-gt500cr-mustang-by-classic-recreations.jpg'
})

// for(let i = 0; productList.lenght; i++) es lo mismo

function ordenProduct(arr) {
    
    for (product of arr) {
        const htmlCards = `<div class="product-card">
        <img src= ${product.image} class="product-img"> 
        <div class="product-info">
        <div>
            <p>$${product.price}</p>
            <p>${product.name}</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="logo">
        </figure>
        </div>
    </div>`
    const cardsContainer = document.querySelector('.card-container');
    cardsContainer.innerHTML += htmlCards
    }

}

ordenProduct(productList);