document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('js-loading');
  document.body.classList.add('js-loaded');

  // Intersection observer for cards
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
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
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
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
      tooShort: 'A mensaxe debe ter polo menos 4 caracteres.',
      tooLong: 'A mensaxe non pode superar os 2000 caracteres.'
    }
  };

  function showError(input, message) {
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
        showError(input, msgs[errorType]);
        return false;
      }
    }
    return false;
  }

  const form = document.querySelector('.contact-form');
  if (form) {
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
      let valid = true;

      inputs.forEach((input) => {
        input.classList.add('was-validated');
        if (!validateField(input)) valid = false;
      });

      if (!valid) {
        const firstError = form.querySelector('.form-error.visible');
        if (firstError) firstError.previousElementSibling.focus();
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      try {
        const res = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          btn.textContent = 'Enviado!';
          form.reset();
          inputs.forEach((input) => { input.classList.remove('was-validated'); clearError(input); });
          setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
        } else {
          throw new Error('Erro no servidor');
        }
      } catch {
        btn.textContent = 'Erro';
        setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
      }
    });
  }
});
