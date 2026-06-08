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

  // ─── Hero Carousel ────────────────────────────────
  (function () {
    var carousel = document.getElementById('heroCarousel');
    if (!carousel) return;

    var slides = carousel.querySelector('.slides');
    var images = slides.querySelectorAll('img');
    var total = images.length;
    if (total < 2) return;

    var current = 0;
    var interval;
    var DURATION = 5000;

    function goTo(index) {
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;
      current = index;
      slides.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
      stopAuto();
      interval = setInterval(next, DURATION);
    }

    function stopAuto() {
      clearInterval(interval);
    }

    // Dots
    var dotsContainer = document.getElementById('heroDots');
    var dots = [];
    for (var i = 0; i < total; i++) {
      var btn = document.createElement('button');
      btn.setAttribute('aria-label', 'Ir á imaxe ' + (i + 1));
      if (i === 0) btn.classList.add('active');
      btn.addEventListener('click', function (idx) {
        return function () { goTo(idx); startAuto(); };
      }(i));
      dotsContainer.appendChild(btn);
      dots.push(btn);
    }

    // Arrows
    document.getElementById('heroPrev').addEventListener('click', function () { prev(); startAuto(); });
    document.getElementById('heroNext').addEventListener('click', function () { next(); startAuto(); });

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);

    startAuto();
  })();

  // ─── AOS ─────────────────────────────────────────
  AOS.init({
    duration: 600,
    easing: 'ease-out-cubic',
    once: true,
    mirror: false,
    offset: 60,
  });

  // ─── Fancybox ────────────────────────────────────
  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: { autoStart: false }
  });

  // ─── Pechar ao clicar fóra ───────────────────────
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.card')) {
      document.querySelectorAll('.card.active').forEach(function (c) {
        c.classList.remove('active');
      });
    }
  });

})();
