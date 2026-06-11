// ============================================
// NORDIC STUDIO - JAVASCRIPT INTERACTIVO
// ============================================

// DOM Elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const contactBtn = document.getElementById('contactBtn');
const backToTop = document.getElementById('backToTop');
const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const contactForm = document.getElementById('contactForm');
const carouselDots = document.getElementById('carouselDots');

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
let autoSlideInterval;

// ============================================
// NAVEGACIÓN HAMBURGUESA
// ============================================
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    const isExpanded = navToggle.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isExpanded);
    navToggle.setAttribute('aria-label', isExpanded ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
});

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    });
});

// Cerrar menú al hacer click fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    }
});
// ============================================
// NAVEGACIÓN 
// ============================================

const menuList = document.querySelector('.Menu-list');
const menuItems = document.querySelectorAll('.Menu-list-item');

function updatePerspectiveMenu(event) {
    if (!menuList || window.innerWidth <= 768) {
        return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const offsetX = 0.5 - event.clientX / width;
    const offsetY = 0.5 - event.clientY / height;
    const offsetPoster = Number(menuList.dataset.offset) || 10;

    menuList.style.transform =
        'translate3d(0, ' + (-offsetX * offsetPoster) + 'px, 0) ' +
        'rotateX(' + (-offsetY * offsetPoster) + 'deg) ' +
        'rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)';

    menuItems.forEach(item => {
        const offsetLayer = Number(item.dataset.offset) || 0;

        item.style.transform =
            'translate3d(' + (offsetX * offsetLayer) + 'px, ' +
            (offsetY * offsetLayer) + 'px, 20px)';
    });
}

function resetPerspectiveMenu() {
    if (!menuList) {
        return;
    }

    menuList.style.transform = window.innerWidth <= 768 ? 'none' : 'rotateX(-10deg) rotateY(20deg)';
    menuItems.forEach(item => {
        item.style.transform = 'none';
    });
}

let rafMousemoveId = null;
window.addEventListener('mousemove', (e) => {
    if (rafMousemoveId) return;
    rafMousemoveId = requestAnimationFrame(() => {
        updatePerspectiveMenu(e);
        rafMousemoveId = null;
    });
});
window.addEventListener('resize', () => {
    resetPerspectiveMenu();
    moveToSlide(currentSlide);
});

// ============================================
// CARRUSEL AUTOMÁTICO
// ============================================
function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Ir a diapositiva ' + (i + 1));
        dot.addEventListener('click', () => moveToSlide(i));
        carouselDots.appendChild(dot);
    }
}

function updateDots() {
    const dots = carouselDots.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function getSlideWidth() {
    return carouselTrack.querySelector('.carousel-slide').offsetWidth;
}

function moveToSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    carouselTrack.scrollLeft = currentSlide * getSlideWidth();
    updateDots();
    resetAutoSlide();
}

createDots();

function nextSlide() {
    moveToSlide(currentSlide + 1);
}

function prevSlide() {
    moveToSlide(currentSlide - 1);
}

function autoSlide() {
    nextSlide();
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 5000);
}

// Event listeners para botones del carrusel
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Iniciar auto-slide
autoSlideInterval = setInterval(autoSlide, 5000);

// Pausar auto-slide al ocultar la pestaña
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(autoSlideInterval);
    } else {
        resetAutoSlide();
    }
});

// Sincronizar dots al hacer scroll manual
carouselTrack.addEventListener('scroll', () => {
    const slideWidth = getSlideWidth();
    if (slideWidth > 0) {
        const newIndex = Math.round(carouselTrack.scrollLeft / slideWidth);
        if (newIndex !== currentSlide) {
            currentSlide = newIndex;
            updateDots();
            resetAutoSlide();
        }
    }
}, { passive: true });

// Pausar auto-slide cuando el usuario interactúa
carouselTrack.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

carouselTrack.addEventListener('mouseleave', resetAutoSlide);

// Pausar auto-slide en interacción táctil
carouselTrack.addEventListener('touchstart', () => {
    clearInterval(autoSlideInterval);
}, false);

carouselTrack.addEventListener('touchend', () => {
    resetAutoSlide();
}, false);

// ============================================
// Lightbox carrusel interactivo
// ============================================
const galleryLinks = document.querySelectorAll('[data-lightbox="gallery"]');
const galleryItems = [];
galleryLinks.forEach(link => {
    galleryItems.push({
        src: link.href,
        caption: link.dataset.caption || '',
        alt: link.querySelector('img')?.alt || ''
    });
});

const lightboxDialog = document.createElement('dialog');
lightboxDialog.id = 'lightbox';
lightboxDialog.innerHTML = `
    <div class="lightbox-overlay">
        <button class="lightbox-close" aria-label="Cerrar">&times;</button>
        <button class="lightbox-prev" aria-label="Imagen anterior">&#10094;</button>
        <button class="lightbox-next" aria-label="Imagen siguiente">&#10095;</button>
        <div class="lightbox-content">
            <img class="lightbox-img" src="" alt="">
            <p class="lightbox-caption"></p>
        </div>
        <div class="lightbox-counter"><span class="lightbox-current">1</span> / <span class="lightbox-total">${galleryItems.length}</span></div>
        <div class="lightbox-dots" id="lightboxDots"></div>
    </div>`;
document.body.appendChild(lightboxDialog);

const lightboxImg = lightboxDialog.querySelector('.lightbox-img');
const lightboxCaption = lightboxDialog.querySelector('.lightbox-caption');
const lightboxClose = lightboxDialog.querySelector('.lightbox-close');
const lightboxPrev = lightboxDialog.querySelector('.lightbox-prev');
const lightboxNext = lightboxDialog.querySelector('.lightbox-next');
const lightboxCurrent = lightboxDialog.querySelector('.lightbox-current');
const lightboxTotal = lightboxDialog.querySelector('.lightbox-total');
const lightboxDots = lightboxDialog.querySelector('#lightboxDots');

let previousFocusElement = null;
let lightboxIndex = 0;

// Crear dots del lightbox
galleryItems.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'lightbox-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Ir a imagen ' + (i + 1));
    dot.addEventListener('click', () => goToLightboxSlide(i));
    lightboxDots.appendChild(dot);
});

function goToLightboxSlide(index) {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    lightboxIndex = index;

    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.95)';

    setTimeout(() => {
        lightboxImg.src = galleryItems[lightboxIndex].src;
        lightboxImg.alt = galleryItems[lightboxIndex].alt;
        lightboxCaption.textContent = galleryItems[lightboxIndex].caption;
        lightboxCurrent.textContent = lightboxIndex + 1;

        lightboxDots.querySelectorAll('.lightbox-dot').forEach((d, i) => {
            d.classList.toggle('active', i === lightboxIndex);
        });

        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
    }, 150);
}

function openLightbox(index) {
    previousFocusElement = document.activeElement;
    lightboxIndex = index;
    goToLightboxSlide(lightboxIndex);
    lightboxDialog.showModal();
    lightboxClose.focus();
}

function closeLightbox() {
    lightboxDialog.close();
    if (previousFocusElement) {
        previousFocusElement.focus();
    }
}

galleryLinks.forEach((link, i) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(i);
    });
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxDialog.addEventListener('click', (e) => {
    if (e.target === lightboxDialog) closeLightbox();
});

lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    goToLightboxSlide(lightboxIndex - 1);
});

lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    goToLightboxSlide(lightboxIndex + 1);
});

// Teclado en lightbox
lightboxDialog.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToLightboxSlide(lightboxIndex - 1);
    if (e.key === 'ArrowRight') goToLightboxSlide(lightboxIndex + 1);
});

// Swipe táctil en lightbox
let touchStartX = 0;
let touchEndX = 0;
lightboxDialog.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
lightboxDialog.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) goToLightboxSlide(lightboxIndex + 1);
        else goToLightboxSlide(lightboxIndex - 1);
    }
}, { passive: true });

// ============================================
// SCROLL EFFECTS & PARALLAX (with RAF)
// ============================================
let ticking = false;
const navbar = document.querySelector('.navbar');
const heroImg = document.querySelector('.hero-background img');

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const scrolled = window.scrollY;

            navbar.classList.toggle('scrolled', scrolled > 100);

            if (heroImg && scrolled <= window.innerHeight) {
                heroImg.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
            }

            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// ============================================
// BOTÓN CONTACTAR (HERO)
// ============================================
contactBtn.addEventListener('click', () => {
    const contactSection = document.getElementById('contacto');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

// ============================================
// BOTÓN VOLVER AL INICIO
// ============================================
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// FORMULARIO DE CONTACTO - VALIDACIÓN EN VIVO
// ============================================
const formInputs = contactForm.querySelectorAll('input, textarea');
const formStatus = document.createElement('div');
formStatus.className = 'form-status';
contactForm.querySelector('button[type="submit"]').before(formStatus);

formInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.checkValidity()) {
            input.style.borderColor = '#2e7d32';
        } else {
            input.style.borderColor = '';
        }
        if (input.value === '') {
            input.style.borderColor = '';
            input.style.backgroundColor = '';
        }
        formStatus.classList.remove('visible');
    });
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    formInputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
            input.style.borderColor = '#c62828';
            input.style.backgroundColor = '#fce4ec';
        }
    });

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    if (!isValid) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Por favor, completa todos los campos correctamente.';
        formStatus.classList.add('visible');
        return;
    }

    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    console.log('Formulario enviado:', { name, email, message });

    formStatus.className = 'form-status success';
    formStatus.textContent = 'Mensaje enviado correctamente.';
    formStatus.classList.add('visible');
    submitBtn.textContent = 'Enviado';
    submitBtn.disabled = true;

    setTimeout(() => {
        contactForm.reset();
        formInputs.forEach(input => {
            input.style.borderColor = '';
            input.style.backgroundColor = '';
        });
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        formStatus.classList.remove('visible');
        setTimeout(() => { formStatus.textContent = ''; }, 300);
    }, 3000);
});

// ============================================
// ANIMACIONES AL SCROLL (INTERSECTION OBSERVER)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.gallery-item, .service-card, .carousel-caption').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    elementObserver.observe(el);
});

// ============================================
// ACCESSIBILITY - TECLADO
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    }
    
    if (lightboxDialog.open) return;

    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// ============================================
// ACTIVE NAV LINK ON SCROLL (scroll spy)
// ============================================
const navSections = [
    { id: 'inicio', linkIndex: 0 },
    { id: 'servicios', linkIndex: 1 },
    { id: 'contacto', linkIndex: 2 }
];

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const idx = navSections.findIndex(s => s.id === entry.target.id);
            if (idx >= 0) {
                menuItems.forEach(item => item.classList.remove('active'));
                if (menuItems[idx]) {
                    menuItems[idx].classList.add('active');
                }
            }
        }
    });
}, { rootMargin: '-120px 0px -60% 0px', threshold: 0 });

navSections.forEach(s => {
    const el = document.getElementById(s.id);
    if (el) sectionObserver.observe(el);
});

// ============================================
// INICIALIZACIÓN
// ============================================
