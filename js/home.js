document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        nav.classList.toggle('toggle');
    });
});
