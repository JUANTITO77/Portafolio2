document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById('menuDesple');
    const botonMenu = document.getElementById('img_menu');
    const menuItems = document.querySelectorAll('#menuDesple li a');

    botonMenu.addEventListener('click', () => {
        menu.classList.toggle('visible');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('visible');
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const webRopaImage = document.getElementById('webRopaImage');
    webRopaImage.addEventListener('click', () => {
        window.open('https://juantito77.github.io/TiendaDeRopa/', '_blank');
    });
});
