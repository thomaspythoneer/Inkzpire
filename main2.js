const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    navLinks.classList.toggle('active');
});
