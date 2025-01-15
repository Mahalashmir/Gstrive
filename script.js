// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            alert(`You clicked on ${link.textContent}!`);
        });
    });

    const welcomeImage = document.querySelector('.welcome-image');
    if (welcomeImage) {
        welcomeImage.addEventListener('mouseover', () => {
            welcomeImage.style.transform = 'scale(1.05)';
            welcomeImage.style.transition = 'transform 0.3s';
        });

        welcomeImage.addEventListener('mouseout', () => {
            welcomeImage.style.transform = 'scale(1)';
        });
    }
});
