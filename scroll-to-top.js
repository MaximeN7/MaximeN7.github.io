// JavaScript to toggle the hamburger menu
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-grid li a');

// Toggle the hamburger menu on click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Close the hamburger menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
    });
});

// Scroll to top button functionality
const scrollToTopBtn = document.getElementById("scroll-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For normal browsers
});