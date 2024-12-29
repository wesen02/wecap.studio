// DOM Elements
const elements = {
    mobileMenu: document.querySelector('.mobile-menu'),
    navLinks: document.querySelector('.nav-links'),
    galleries: document.querySelectorAll('.gallery-item')
};

// Mobile Menu
function initMobileMenu() {
    elements.mobileMenu.addEventListener('click', () => {
        elements.navLinks.classList.toggle('active');
        elements.mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!elements.navLinks.contains(e.target) && !elements.mobileMenu.contains(e.target)) {
            elements.navLinks.classList.remove('active');
            elements.mobileMenu.classList.remove('active');
        }
    });
}

// Image Slider
function initImageSliders() {
    elements.galleries.forEach(gallery => {
        const slides = gallery.querySelectorAll('.slide');
        const prevBtn = gallery.querySelector('.prev');
        const nextBtn = gallery.querySelector('.next');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        prevBtn?.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        nextBtn?.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href'))?.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initImageSliders();
    initSmoothScroll();
}); 