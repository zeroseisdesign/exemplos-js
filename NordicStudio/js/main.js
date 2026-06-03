(function () {
  'use strict';

  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  const linkItems = document.querySelectorAll('.nav__links a');

  toggle.addEventListener('click', function () {
    links.classList.toggle('nav__links--open');
    nav.classList.toggle('nav--menu-open');
  });

  linkItems.forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('nav__links--open');
      nav.classList.remove('nav--menu-open');
    });
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && links.classList.contains('nav__links--open')) {
      links.classList.remove('nav__links--open');
      nav.classList.remove('nav--menu-open');
    }
  });

  function handleScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  const contactForm = document.querySelector('.contact__form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('.contact__btn');
      const original = btn.textContent;
      btn.textContent = 'ENVIADO ✓';
      btn.style.background = '#D4C9B8';
      setTimeout(function () {
        btn.textContent = original;
        btn.style.background = '';
        contactForm.reset();
      }, 2500);
    });
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.project-card, .service-card, .palette__swatch').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

})();
