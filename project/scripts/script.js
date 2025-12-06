// script.js

// Get the current year for the footer copyright
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = `&copy; ${currentYear} Pasima Assets Global Limited. All rights reserved.`;
});

// Add event listener to the navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add event listener to the contact form
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        // Send the form data to the server or email service
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert('Message sent successfully!');
        contactForm.reset();
    });
}

// Add event listener to the service items
const serviceItems = document.querySelectorAll('.service-item');
if (serviceItems) {
    serviceItems.forEach((item) => {
        item.addEventListener('click', () => {
            const serviceTitle = item.querySelector('h3').textContent;
            alert(`You clicked on ${serviceTitle}`);
        });
    });
}

// Smooth scrolling to top
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Top';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.display = 'none';
document.body.append