function flipCard(card) {
    card.classList.toggle('flipped');
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.1,
        rootMargin: '-50px'
    });

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
}); 