const form = document.querySelector('#form');
const sucsessMsg = document.querySelector('#successmsg');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    sucsessMsg.classList.toggle('visible');
    setTimeout(() => sucsessMsg.classList.toggle('visible'), 3000)
    form.reset();
})
