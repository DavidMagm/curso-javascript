const menuEmail = document.querySelector('.navbar-email');
const menuDes = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const menuMovil = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');



menuEmail.addEventListener('click', toggleMenuDes);

function toggleMenuDes() {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    menuDes.classList.toggle('inactive');
}

menuBurger.addEventListener('click', toggleMenuMov);

function toggleMenuMov() {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed) {
        aside.classList.add('inactive');
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
    aside.classList.toggle('inactive');
}
