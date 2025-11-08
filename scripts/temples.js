const nav = document.querySelector('nav ul');
const hamburger = document.createElement('button');
hamburger.textContent = '☰';
hamburger.setAttribute('aria-label', 'Toggle Navigation');
document.querySelector('header').insertBefore(hamburger, nav);

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    hamburger.textContent = nav.classList.contains('show') ? '✕' : '☰';
});