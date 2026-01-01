const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

// Toggle menu on burger click
burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');

    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', !expanded);
});

// Close menu on link click with fade out and scroll
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default jump

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Fade out menu
        menu.classList.remove('active');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', false);

        // Wait for the fade-out transition to finish before scrolling
        setTimeout(() => {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

const filterButtons = document.querySelectorAll('.project-filters button');
const projectCards = document.querySelectorAll('.project-cards');

// Initially show only 3 projects
projectCards.forEach((card, index) => {
    card.style.display = index < 3 ? 'flex' : 'none';
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;

        projectCards.forEach(card => {
            const type = card.dataset.type;

            if (filter === 'all') {
                // Show only first 3 projects on "All"
                card.style.display = [...projectCards].indexOf(card) < 3 ? 'flex' : 'none';
            } else {
                // Show all projects matching the filter
                card.style.display = (type === filter) ? 'flex' : 'none';
            }
        });
    });
});

// For current projects I'm working on
const slides = document.querySelectorAll('.status-slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Initial slide
showSlide(currentIndex);

// Change slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 3000);
