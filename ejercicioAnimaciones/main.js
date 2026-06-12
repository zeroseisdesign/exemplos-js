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

  // ─── Modal ──────────────────────────────────────
  var modal = document.getElementById('modal');
  var modalTitle = document.getElementById('modalTitle');
  var modalDesc = document.getElementById('modalDesc');
  var modalClose = document.getElementById('modalClose');

  function openModal(title, desc) {
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modal.classList.add('open');
  }

  function closeModal() {
    modal.classList.remove('open');
  }

  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // ─── Cards "Ver máis" ────────────────────────────
  var btns = document.querySelectorAll('.card__btn');

  btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var card = btn.closest('.card');
      if (!card) return;

      var title = card.querySelector('.card__title').textContent;
      var descs = {
        'Deseño Gráfico': 'Creamos identidades visuais únicas que contan a historia da túa marca con creatividade e precisión. Desde logotipos ata guías de estilo completas, cada elemento está deseñado para comunicar a esencia do teu negocio.',
        'Desenvolvemento Web': 'Construímos sitios e aplicacións modernas, responsivas e optimizadas para un rendemento máximo. Empregamos as últimas tecnoloxías para garantir velocidade, accesibilidade e unha experiencia de usuario excepcional.',
        'Marketing Dixital': 'Estratexias de posicionamento e campañas que conectan coa túa audiencia e generan resultados. SEO, SEM, redes sociais e email marketing para levar a túa marca ao seguinte nivel.',
        'Fotografía Profesional': 'Sesións de fotografía de produto, espazos e retratos con iluminación natural e estilo minimalista. Cada imaxe está coidadosamente composta para reflectir a calidade e o carácter da túa marca.',
      };
      openModal(title, descs[title] || card.querySelector('.card__desc').textContent);
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
