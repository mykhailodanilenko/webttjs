const menuBtn = document.querySelector('#menu-btn');
const menuContainer = document.querySelector('#menu-container');

menuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('menu-open');
    menuBtn.classList.toggle('active');
})
