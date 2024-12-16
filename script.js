// Hamburger Menu

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


// Testimonial
 

const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showTestimonial() {
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
    });

    testimonials[currentIndex].style.display = 'block';
}

showTestimonial();

setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial();
}, 2000); 







