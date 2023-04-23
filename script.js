const menuBtn = document.querySelector('.menu__icon');
const menu = document.querySelector('.aside')
const menuExitBtn = document.querySelector('.aside__exit-icon');

const userBtn = document.querySelector('.user__icon');
const popup = document.querySelector('.user__popup');
const userExitBtn = document.querySelector('.user__exit-icon');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active-menu');
});

menuExitBtn.addEventListener('click', function() {
    menu.classList.remove('active-menu');
});

userBtn.addEventListener('click', function() {
    popup.classList.toggle('active-user');
});

userExitBtn.addEventListener('click', function() {
    popup.classList.remove('active-user');
});

document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove('active-menu');
    }
});

document.addEventListener('click', function(event) {
    if (!popup.contains(event.target) && !userBtn.contains(event.target)) {
        popup.classList.remove('active-user');
    }
});