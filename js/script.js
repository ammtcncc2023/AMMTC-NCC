const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


// Mobile menu

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


// Close menu after clicking a link

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


// Add shadow to header when scrolling

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(3, 15, 24, 0.98)";

    } else {

        header.style.background =
            "rgba(4, 18, 29, 0.94)";

    }

});
