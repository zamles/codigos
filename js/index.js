

var spanAnnio = document.querySelector('#annio');
var fecha = new Date();
spanAnnio.innerHTML = fecha.getFullYear();

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

window.addEventListener('resize', () => {
    const menu = document.getElementById('menu');
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
    }
});









