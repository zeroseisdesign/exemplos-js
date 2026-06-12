document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const btnVer = card.querySelector('.btn-ver');
        const btnPechar = card.querySelector('.btn-pechar');

        btnVer.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.add('active');
        });

        btnPechar.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.remove('active');
        });
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.dataset.delay) || 0;
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        cards.forEach(card => observer.observe(card));
    }
});
