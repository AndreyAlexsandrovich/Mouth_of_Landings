document.addEventListener("DOMContentLoaded", function () { 
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.header__list-items');
    const lines = document.querySelectorAll(".line");

    function toggleMenu() { 
        menu.classList.toggle("show-menu");
        menu.classList.toggle("active")
        lines.forEach(line => line.classList.toggle('active'));
    }

    hamburger.addEventListener('click', toggleMenu);
})