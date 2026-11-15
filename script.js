
// =================================
// 1. MOBILE NAVIGATION
// =================================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close menu when a navigation link is selected

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// =================================
// 2. AUTOMATIC COPYRIGHT YEAR
// =================================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// =================================
// 3. WEBSITE READY MESSAGE
// =================================

console.log("Welcome to My Robotics Lab!");

console.log("Website successfully loaded.");
