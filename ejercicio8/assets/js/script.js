// Executar ao cargar (load)
window.addEventListener('load', () => {
  console.log('Páxina cargada');
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// NAVBAR hamburguesa + toggle clases
const navbarTogglerBtn = document.getElementById('navbarTogglerBtn');
const mainNavbar = document.getElementById('mainNavbar');

if (navbarTogglerBtn && mainNavbar) {
  navbarTogglerBtn.addEventListener('click', () => {
    mainNavbar.classList.toggle('show');
    navbarTogglerBtn.classList.toggle('active');
    console.log('Menú hamburguesa clicado');
  });
}

// Cambios na navegación ao facer scroll
const navbar = document.querySelector('.custom-navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Botóns hero
const btnComprar = document.getElementById('btnComprar');
const btnMaisInfo = document.getElementById('btnMaisInfo');

if (btnComprar) {
  btnComprar.addEventListener('click', () => {
    console.log('Botón "Comprar agora" clicado');
    // Por exemplo, facer scroll ao formulario
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
  });
}

if (btnMaisInfo) {
  btnMaisInfo.addEventListener('click', () => {
    console.log('Botón "Máis información" clicado');
    document.getElementById('tabs-info').scrollIntoView({ behavior: 'smooth' });
  });
}

// GALERÍA: mouseover, mouseout, click
const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach(img => {
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

// TABS: detectar cambio de pestana activa
const tabButtons = document.querySelectorAll('#timexTabs button[data-bs-toggle="tab"]');

tabButtons.forEach(tabBtn => {
  tabBtn.addEventListener('shown.bs.tab', () => {
    console.log('Pestana activa');
  });
});

// VALIDACIÓN FORMULARIO
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    let isValid = true;

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const mensaxe = document.getElementById('mensaxe');
    const condicions = document.getElementById('condicions');

    // Nome
    if (!nome.value.trim()) {
      nome.classList.add('is-invalid');
      isValid = false;
    } else {
      nome.classList.remove('is-invalid');
    }

    // Email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.classList.add('is-invalid');
      isValid = false;
    } else {
      email.classList.remove('is-invalid');
    }

    // Teléfono simple (mínimo 6 díxitos)
    const phoneRegex = /^[0-9\s+\-]{6,}$/;
    if (!phoneRegex.test(telefono.value.trim())) {
      telefono.classList.add('is-invalid');
      isValid = false;
    } else {
      telefono.classList.remove('is-invalid');
    }

    // Mensaxe
    if (!mensaxe.value.trim()) {
      mensaxe.classList.add('is-invalid');
      isValid = false;
    } else {
      mensaxe.classList.remove('is-invalid');
    }

    // Checkbox
    if (!condicions.checked) {
      condicions.classList.add('is-invalid');
      isValid = false;
    } else {
      condicions.classList.remove('is-invalid');
    }

    if (isValid) {
      console.log('Formulario válido, enviando...');
      // Aquí poderías engadir unha alerta personalizada
      alert('Grazas! En breve contactarémos contigo.');
      contactForm.reset();
    } else {
      console.log('Erro na validación do formulario');
    }
  });
}
