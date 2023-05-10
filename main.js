const menuEmail = document.querySelector('.navbar-email');
const menuDes = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleMenuDes);

function toggleMenuDes() {
    menuDes.classList.toggle('inactive');
}