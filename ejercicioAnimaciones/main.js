(function () {
  'use strict';

  // ─── Dark Mode Toggle ────────────────────────────
  var themeToggle = document.getElementById('themeToggle');
  var html = document.documentElement;

  var savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  }

  themeToggle.addEventListener('click', function () {
    var isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
      html.removeAttribute('data-theme');
      themeToggle.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    }
  });

  // ─── Cards "Ver máis" ────────────────────────────
  var btns = document.querySelectorAll('.card__btn');

  btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var card = btn.closest('.card');
      if (!card) return;

      document.querySelectorAll('.card.active').forEach(function (other) {
        if (other !== card) other.classList.remove('active');
      });

      card.classList.add('active');
    });
  });

  // ─── Cards "Pechar" ──────────────────────────────
  var closes = document.querySelectorAll('.card__close');

  closes.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var card = btn.closest('.card');
      if (card) card.classList.remove('active');
    });
  });

  // ─── Pechar ao clicar fóra ───────────────────────
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.card')) {
      document.querySelectorAll('.card.active').forEach(function (c) {
        c.classList.remove('active');
      });
    }
  });

  // ─── Intersection Observer con stagger ──────────
  if ('IntersectionObserver' in window) {
    var cards = document.querySelectorAll('.card');

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var card = entry.target;
            var delay = parseInt(card.getAttribute('data-delay')) || 0;

            setTimeout(function () {
              card.classList.add('stagger-in');
            }, delay);

            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach(function (card) {
      observer.observe(card);
    });
  } else {
    document.querySelectorAll('.card').forEach(function (card) {
      card.classList.add('stagger-in');
    });
  }
})();
