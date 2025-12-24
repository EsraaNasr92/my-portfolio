const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');

    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', !expanded);
});

const filterButtons = document.querySelectorAll('.project-filters button');
const projectCards = document.querySelectorAll('.project-cards');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;

        projectCards.forEach(card => {
            const type = card.dataset.type;
            card.style.display = (filter === 'all' || filter === type) ? 'flex' : 'none';
        });
    });
});
