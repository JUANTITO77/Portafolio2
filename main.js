const menu = document.getElementById('menuDesple');
const botonMenu = document.getElementById('img_menu');

botonMenu.addEventListener('click', () => {
    menu.classList.toggle('visible');
});