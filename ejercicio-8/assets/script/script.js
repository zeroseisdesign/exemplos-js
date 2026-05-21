// Executar ao cargar a páxina
window.addEventListener('load', () => {
  console.log('Páxina cargada');
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Navbar hamburguesa (abrir/pechar + cambio visual)
const navbarToggler = document.getElementById('navbarToggler');
const navbarNav = document.getElementById('navbarNav');

if (navbarToggler && navbarNav) {
  navbarToggler.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
    navbarToggler.classList.toggle('open');
    console.log('Menú hamburguesa clicado');
  });
}

// Efecto scroll na navegación
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (!mainNav) return;
  if (window.scrollY > 50) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }
});

// Botóns Hero
const btnBuy = document.getElementById('btnBuy');
const btnMore = document.getElementById('btnMore');

if (btnBuy) {
  btnBuy.addEventListener('click', () => {
    console.log('Botón "Comprar agora" clicado');
    // Exemplo: desprazar ao formulario
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
}

if (btnMore) {
  btnMore.addEventListener('click', () => {
    console.log('Botón "Máis información" clicado');
    document.getElementById('tabs').scrollIntoView({ behavior: 'smooth' });
  });
}

// Galería: mouseover, mouseout, click
const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach((img) => {
  img.addEventListener('mouseover', () => {
    img.classList.add('hovered');
  });

  img.addEventListener('mouseout', () => {
    img.classList.remove('hovered');
  });

  img.addEventListener('click', () => {
    console.log('Imaxe seleccionada');
  });
});

// Tabs: detectar cambio de pestana activa
const tabButtons = document.querySelectorAll('#infoTabs button[data-bs-toggle="tab"]');

tabButtons.forEach((btn) => {
  btn.addEventListener('shown.bs.tab', () => {
    console.log('Pestana activa');
  });
});

// Validación do formulario
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    let isValid = true;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const termsInput = document.getElementById('terms');

    // Nome
    if (!nameInput.value.trim()) {
      nameInput.classList.add('is-invalid');
      isValid = false;
    } else {
      nameInput.classList.remove('is-invalid');
      nameInput.classList.add('is-valid');
    }

    // Email (validación simple)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('is-invalid');
      isValid = false;
    } else {
      emailInput.classList.remove('is-invalid');
      emailInput.classList.add('is-valid');
    }

    // Teléfono (validación simple: mínimo 6 díxitos)
    const phoneDigits = phoneInput.value.replace(/\D/g, '');
    if (phoneDigits.length < 6) {
      phoneInput.classList.add('is-invalid');
      isValid = false;
    } else {
      phoneInput.classList.remove('is-invalid');
      phoneInput.classList.add('is-valid');
    }

    // Mensaxe
    if (!messageInput.value.trim()) {
      messageInput.classList.add('is-invalid');
      isValid = false;
    } else {
      messageInput.classList.remove('is-invalid');
      messageInput.classList.add('is-valid');
    }

    // Checkbox
    if (!termsInput.checked) {
      termsInput.classList.add('is-invalid');
      isValid = false;
    } else {
      termsInput.classList.remove('is-invalid');
      termsInput.classList.add('is-valid');
    }

    if (isValid) {
      console.log('Formulario válido. Enviando datos...');
      // Aquí poderías engadir unha alerta personalizada ou resetear o formulario
      alert('Grazas! En breve contactaremos contigo.');
      contactForm.reset();
      const inputs = contactForm.querySelectorAll('.is-valid');
      inputs.forEach((el) => el.classList.remove('is-valid'));
    } else {
      console.log('Erro na validación do formulario');
    }
  });
}
