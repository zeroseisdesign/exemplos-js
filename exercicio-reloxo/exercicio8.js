document.addEventListener('DOMContentLoaded', () => {
    console.log("Páxina cargada correctamente. Iniciando scripts...");

    document.getElementById('year').textContent = new Date().getFullYear();

    inicializarNavegacion();
    inicializarMenuHamburguesa();
    inicializarGaleria();
    inicializarPestanas();
    inicializarFormulario();
    inicializarModoEscuro();
    inicializarScrollReveal();
    inicializarScrollToTop();
    inicializarNewsletter();
});

function inicializarNavegacion() {
    const navbar = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });
}

function inicializarMenuHamburguesa() {
    const toggler = document.getElementById('menuToggle');
    const icon = document.getElementById('menuIcon');

    toggler.addEventListener('click', () => {
        const isOpen = icon.classList.contains('bi-x-lg');
        if (!isOpen) {
            icon.classList.replace('bi-list', 'bi-x-lg');
            icon.classList.add('menu-open-icon');
            toggler.setAttribute('aria-expanded', 'true');
        } else {
            icon.classList.remove('menu-open-icon');
            icon.classList.replace('bi-x-lg', 'bi-list');
            toggler.setAttribute('aria-expanded', 'false');
        }
    });
}

function inicializarGaleria() {
    if (typeof Fancybox !== "undefined") {
        Fancybox.bind('[data-fancybox="gallery"]', {
            Carousel: { infinite: true },
            Thumbs: { type: "classic" }
        });
    }
}

function inicializarPestanas() {
    const tabs = document.querySelectorAll('button[data-bs-toggle="tab"]');
    const STORAGE_KEY = 'timex-active-tab';

    tabs.forEach(tab => {
        tab.addEventListener('shown.bs.tab', (event) => {
            localStorage.setItem(STORAGE_KEY, event.target.id);
        });
    });

    const tabIdGardada = localStorage.getItem(STORAGE_KEY);
    if (tabIdGardada) {
        const tabGardada = document.getElementById(tabIdGardada);
        if (tabGardada) {
            const tabInstance = new bootstrap.Tab(tabGardada);
            tabInstance.show();
        }
    }
}

function inicializarFormulario() {
    const form = document.getElementById('contactForm');
    const alertBox = document.getElementById('formAlert');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();

        const isValid = form.checkValidity();
        form.classList.add('was-validated');

        if (isValid) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            alertBox.className = 'alert alert-info d-block';
            alertBox.textContent = 'A túa mensaxe está sendo enviada...';

            setTimeout(() => {
                alertBox.className = 'alert alert-success d-block';
                alertBox.textContent = 'Grazas! A túa mensaxe foi enviada correctamente. En breve recibirás resposta.';

                setTimeout(() => {
                    form.reset();
                    form.classList.remove('was-validated');
                    alertBox.className = 'alert d-none';
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Enviar mensaxe';
                }, 4000);
            }, 1500);
        } else {
            alertBox.className = 'alert alert-danger d-block';
            alertBox.textContent = 'Por favor, corrixe os erros indicados antes de enviar.';
        }
    });

    document.getElementById('btnMercar').addEventListener('click', () => {
        alert('Redirixindo ao carriño de compra...');
    });

    document.getElementById('btnInfo').addEventListener('click', () => {
        document.getElementById('caracteristicas').scrollIntoView({ behavior: 'smooth' });
    });
}

function inicializarScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function inicializarScrollToTop() {
    const btn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function inicializarModoEscuro() {
    const darkBtn = document.getElementById('darkModeBtn');
    const darkIcon = document.getElementById('darkModeIcon');
    const STORAGE_KEY = 'timex-dark-mode';

    function aplicarModo(light) {
        if (light) {
            document.body.classList.add('light-mode');
            darkIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
        } else {
            document.body.classList.remove('light-mode');
            darkIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
        }
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'true') {
        aplicarModo(true);
    }

    darkBtn.addEventListener('click', () => {
        const light = !document.body.classList.contains('light-mode');
        aplicarModo(light);
        localStorage.setItem(STORAGE_KEY, light);
    });
}

function inicializarNewsletter() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        const alert = document.getElementById('newsletterAlert');

        if (input.value) {
            alert.className = 'alert alert-success d-block';
            alert.textContent = 'Subscrición correcta! Revisa o teu email.';
            input.value = '';

            setTimeout(() => {
                alert.className = 'alert d-none';
            }, 4000);
        }
    });
}