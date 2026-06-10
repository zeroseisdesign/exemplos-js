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

  // Form submission
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
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
