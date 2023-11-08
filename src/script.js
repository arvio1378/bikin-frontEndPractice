const side = document.querySelector('.navbar');
const menu = document.querySelector('#bars');

document.querySelector('#bars').onclick = () => {
    side.classList.toggle('active');
    menu.classList.toggle('fa-xmark');
};