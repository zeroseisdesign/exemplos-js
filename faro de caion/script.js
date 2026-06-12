// Menú hamburguesa para dispositivos móviles
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Animación interactiva del logo con efecto de luz intermitente
logo.addEventListener('click', () => {
    logo.style.animation = 'none';
    setTimeout(() => {
        logo.style.animation = 'intermittentLight 10s ease-in-out infinite';
    }, 10);
});

logo.addEventListener('mouseenter', () => {
    logo.style.animation = 'brightFlash 2s ease-in-out infinite';
});

logo.addEventListener('mouseleave', () => {
    logo.style.animation = 'intermittentLight 10s ease-in-out infinite';
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Grazas pola túa mensaxe! Poñerémonos en contacto en breve.');
        contactForm.reset();
    });
}

// Botón CTA
const btnCta = document.querySelector('.btn-cta');
if (btnCta) {
    btnCta.addEventListener('click', () => {
        document.getElementById('descubrenos').scrollIntoView({ behavior: 'smooth' });
    });
}

// Scroll suave para los enlaces del navegador
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Carrusel principal
(() => {
    const carousel = document.getElementById('carousel');
    if (!carousel) return;

    const slidesContainer = carousel.querySelector('.slides');
    const slides = Array.from(carousel.querySelectorAll('.slide'));
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.getElementById('indicators');
    let current = 0;
    let intervalId = null;
    const delay = 4000;

    function goTo(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        current = index;
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        updateIndicators();
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function play() {
        stop();
        intervalId = setInterval(next, delay);
    }

    function stop() {
        if (intervalId) clearInterval(intervalId);
        intervalId = null;
    }

    function updateIndicators() {
        const btns = Array.from(indicators.children);
        btns.forEach((b, i) => b.classList.toggle('active', i === current));
    }

    // Crear indicadores
    slides.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.setAttribute('aria-label', `Ir á diapositiva ${i+1}`);
        if (i === 0) btn.classList.add('active');
        btn.addEventListener('click', () => { goTo(i); play(); });
        indicators.appendChild(btn);
    });

    nextBtn.addEventListener('click', () => { next(); play(); });
    prevBtn.addEventListener('click', () => { prev(); play(); });

    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', play);

    // Inicio
    goTo(0);
    play();
})();