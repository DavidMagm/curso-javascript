const menuEmail = document.querySelector('.navbar-email');
const menuDes = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const menuMovil = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleMenuDes);

function toggleMenuDes() {
    menuDes.classList.toggle('inactive');
}

menuBurger.addEventListener('click', toggleMenuMov);

function toggleMenuMov() {
    menuMovil.classList.toggle('inactive');
};