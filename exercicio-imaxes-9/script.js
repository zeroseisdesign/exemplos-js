document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carrusel-track');
    const slides = document.querySelectorAll('.carrusel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.carrusel-dots');
    let current = 0;

    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Ir á imaxe ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function goTo(index) {
        current = index;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach(d => d.classList.remove('active'));
        dots[current].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        goTo(current === 0 ? slides.length - 1 : current - 1);
    });

    nextBtn.addEventListener('click', () => {
        goTo(current === slides.length - 1 ? 0 : current + 1);
    });

    setInterval(() => {
        goTo(current === slides.length - 1 ? 0 : current + 1);
    }, 5000);
});
