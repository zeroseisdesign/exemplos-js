document.addEventListener('DOMContentLoaded', () => {
  console.log('[Nordic Studio] DOM cargado');
  document.body.classList.remove('js-loading');
  document.body.classList.add('js-loaded');

  // Intersection observer for cards
  const cards = document.querySelectorAll('.card');
  console.log('[Nordic Studio] Cards atopadas:', cards.length);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('[Nordic Studio] Card visible:', entry.target.querySelector('h3')?.textContent);
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Mobile menu
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  console.log('[Nordic Studio] Menú móbil:', toggle ? 'atopado' : 'non atopado');
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    console.log('[Nordic Studio] Menú móbil:', isOpen ? 'aberto' : 'pechado');
    toggle.setAttribute('aria-label', isOpen ? 'Pechar menú' : 'Menú');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Form validation messages
  const errorMessages = {
    nome: {
      valueMissing: 'nome mínimo de 3 caracteres.',
      patternMismatch: 'Só letras, espazos, apóstrofos e guións (2-50 caracteres).'
    },
    email: {
      valueMissing: 'usuario@dominio.com',
      typeMismatch: 'Introduce un email válido (exemplo: usuario@dominio.com).',
      patternMismatch: 'Introduce un email válido (exemplo: usuario@dominio.com).'
    },
    texto: {
      valueMissing: 'mínimo 4 caracteres.',
      tooShort: 'A mensaxe debe ter polo menos 5 caracteres.',
      tooLong: 'A mensaxe non pode superar os 2000 caracteres.'
    }
  };

  function showError(input, message) {
    console.log('[Nordic Studio] Erro en', input.id, ':', message);
    const errorSpan = document.getElementById(input.id + '-error');
    if (errorSpan) {
      errorSpan.textContent = message;
      errorSpan.classList.add('visible');
    }
  }

  function clearError(input) {
    const errorSpan = document.getElementById(input.id + '-error');
    if (errorSpan) {
      errorSpan.textContent = '';
      errorSpan.classList.remove('visible');
    }
  }

  function validateField(input) {
    clearError(input);
    if (input.validity.valid) return true;
    const msgs = errorMessages[input.name];
    if (!msgs) return false;
    for (const errorType of Object.keys(msgs)) {
      if (input.validity[errorType]) {
        console.log('[Nordic Studio] Validación fallida -', input.id, ':', errorType);
        showError(input, msgs[errorType]);
        return false;
      }
    }
    return false;
  }

  const form = document.querySelector('.contact-form');
  if (form) {
    console.log('[Nordic Studio] Formulario atopado');
    const inputs = form.querySelectorAll('input, textarea');

    // Live validation on blur and input
    inputs.forEach((input) => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('was-validated')) validateField(input);
      });
    });

    // Submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      console.log('[Nordic Studio] Formulario enviado');
      let valid = true;

      inputs.forEach((input) => {
        input.classList.add('was-validated');
        if (!validateField(input)) valid = false;
      });

      if (!valid) {
        console.log('[Nordic Studio] Formulario con erros, non se envía');
        const firstError = form.querySelector('.form-error.visible');
        if (firstError) firstError.previousElementSibling.focus();
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      try {
        console.log('[Nordic Studio] Enviando fetch a', form.action);
        const res = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          console.log('[Nordic Studio] Formulario enviado con éxito');
          btn.textContent = 'Enviado!';
          form.reset();
          inputs.forEach((input) => { input.classList.remove('was-validated'); clearError(input); });
          setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
        } else {
          console.log('[Nordic Studio] Erro no servidor:', res.status);
          throw new Error('Erro no servidor');
        }
      } catch (err) {
        console.log('[Nordic Studio] Erro de rede:', err.message);
        btn.textContent = 'Erro';
        setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
      }
    });
  } else {
    console.warn('[Nordic Studio] Formulario non atopado');
  }
});
