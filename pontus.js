const pontusBild = document.getElementById('pontusbild');
const navLinks = document.getElementById('menu');
const menuIkon = document.getElementById('menuicon');

menuIkon.addEventListener('click', () => {
    menuIkon.classList.toggle('change');
    navLinks.classList.toggle('open');
})

pontusBild.addEventListener('dblclick', () => {
    alert('Välkommen till min Github! https://github.com/Awreally ')
    window.open('https://github.com/Awreally', '_blank');
})