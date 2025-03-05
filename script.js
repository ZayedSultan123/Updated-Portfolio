// Smooth scrolling for navigation (if you add links to different sections)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of a simple button hover effect using JavaScript
const buttons = document.querySelectorAll('.contact-button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#F39C12'; // Golden color on hover
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#2980B9'; // Blue color when not hovered
    });
});
