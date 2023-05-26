const menuBtn = document.querySelector('#menu-btn');
const menuContainer = document.querySelector('#menu-container');

menuBtn.addEventListener('click', () => {
    console.log(menuBtn);
    menuContainer.classList.toggle('menu-open');
    menuBtn.classList.toggle('active');
})
