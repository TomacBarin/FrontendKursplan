const pontusBild = document.getElementById('pontusbild');
const drilonBild = document.querySelector('.footer-bild');
const navLinks = document.getElementById('menu');
const menuIkon = document.getElementById('menuicon');

menuIkon.addEventListener('click', () => {
    menuIkon.classList.toggle('change');
    navLinks.classList.toggle('open');
})

pontusBild.addEventListener('dblclick', () => {
    alert('Välkommen till min Github! https://github.com/Awreally ')
    window.open('https://github.com/Awreally', '_blank');
});

drilonBild.addEventListener('dblclick', () => {
    alert('Välkommen till Drilons Github! https://github.com/drillee')
    window.open('https://github.com/drillee', '_blank');
});