(function () {
  'use strict';

  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  const linkAnchors = document.querySelectorAll('.nav__links a');
  const navItems = document.querySelectorAll('.nav__links li');
  const spans = document.querySelectorAll('.nav__toggle span');

  if (!toggle || !links) {
    console.warn('Nav elements not found');
    return;
  }

  var menuOpen = false;

  function openMenu() {
    if (menuOpen) return;
    menuOpen = true;

    gsap.to(links, {
      right: 0,
      duration: 0.45,
      ease: 'power2.out',
      overwrite: true
    });

    gsap.fromTo(navItems,
      { opacity: 0, x: 24 },
      {
        opacity: 1,
        x: 0,
        duration: 0.35,
        stagger: 0.06,
        ease: 'power2.out',
        delay: 0.15,
        overwrite: true
      }
    );

    gsap.to(spans[0], { rotation: 45, y: 6.5, duration: 0.3, ease: 'power2.out', overwrite: true });
    gsap.to(spans[1], { opacity: 0, duration: 0.2, overwrite: true });
    gsap.to(spans[2], { rotation: -45, y: -6.5, duration: 0.3, ease: 'power2.out', overwrite: true });

    nav.classList.add('nav--menu-open');
  }

  function closeMenu() {
    if (!menuOpen) return;
    menuOpen = false;

    gsap.to(navItems, {
      opacity: 0,
      x: 24,
      duration: 0.2,
      stagger: { each: 0.03, from: 'end' },
      ease: 'power2.in',
      overwrite: true
    });

    gsap.to(links, {
      right: '-100%',
      duration: 0.3,
      ease: 'power2.in',
      delay: 0.15,
      overwrite: true,
      onComplete: function () {
        gsap.set(navItems, { clearProps: 'opacity,x' });
      }
    });

    gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3, ease: 'power2.out', overwrite: true });
    gsap.to(spans[1], { opacity: 1, duration: 0.25, delay: 0.1, overwrite: true });
    gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3, ease: 'power2.out', overwrite: true });

    nav.classList.remove('nav--menu-open');
  }

  toggle.addEventListener('click', function () {
    if (window.innerWidth <= 768) {
      if (menuOpen) closeMenu();
      else openMenu();
    }
  });

  linkAnchors.forEach(function (link) {
    link.addEventListener('click', function () {
      if (menuOpen) closeMenu();
    });
  });

  document.addEventListener('click', function (e) {
    if (menuOpen && !nav.contains(e.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && menuOpen) {
      closeMenu();
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

  // ─── 3 GSAP Effects ──────────────────────────────

  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero title word reveal on page load
  (function () {
    const heroTitle = document.querySelector('.hero__title');
    if (!heroTitle) return;
    const words = heroTitle.textContent.split(' ');
    heroTitle.innerHTML = words
      .map(function (w) {
        return '<span class="hero-word" style="display:inline-block;opacity:0;transform:translateY(24px)">' + w + '</span>';
      })
      .join(' ');
    gsap.to('.hero-word', {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.25,
      delay: 0.6
    });
  })();

  // 2. Scroll-triggered fade+slide-up for sections
  var revealGroups = [
    { selector: '.project-card', stagger: 0.08 },
    { selector: '.service-card', stagger: 0.1 },
    { selector: '.palette__swatch', stagger: 0.06 }
  ];

  revealGroups.forEach(function (group) {
    var els = document.querySelectorAll(group.selector);
    if (!els.length) return;
    gsap.set(els, { opacity: 0, y: 30 });
    ScrollTrigger.batch(els, {
      interval: 0.1,
      batchMax: 8,
      onEnter: function (batch) {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: group.stagger,
          overwrite: true
        });
      }
    });
  });

  // 3. Velocity skew on project images during scroll
  (function () {
    var proxy = { skew: 0 };
    var skewSetter = gsap.quickSetter('.project-card__img', 'skewY', 'deg');
    var clamp = gsap.utils.clamp(-15, 15);
    ScrollTrigger.create({
      onUpdate: function (self) {
        var skew = clamp(self.getVelocity() / -400);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: 'power3',
            overwrite: true,
            onUpdate: function () { skewSetter(proxy.skew); }
          });
        }
      }
    });
    gsap.set('.project-card__img', { transformOrigin: 'right center', force3D: true });
  })();

  // ─── 5 More Effects ────────────────────────────────

  // 4. Hero subtitle + CTA fade-up after title
  (function () {
    var els = document.querySelectorAll('.hero__subtitle, .hero__cta');
    if (!els.length) return;
    gsap.set(els, { opacity: 0, y: 20 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.15,
      delay: 1.2
    });
  })();

  // 5. Services banner parallax on scroll
  (function () {
    var banner = document.querySelector('.services__banner');
    if (!banner) return;
    gsap.fromTo(banner,
      { backgroundPosition: '50% 0%' },
      {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: banner,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  })();

  // 6. Service card icon continuous float
  (function () {
    var icons = document.querySelectorAll('.service-card__icon');
    if (!icons.length) return;
    icons.forEach(function (icon) {
      gsap.to(icon, {
        y: -5,
        duration: 2.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });
    });
  })();

  // 7. Section label slide-in from left
  (function () {
    var labels = document.querySelectorAll('.section-label');
    if (!labels.length) return;
    gsap.set(labels, { opacity: 0, x: -30 });
    ScrollTrigger.batch(labels, {
      interval: 0.15,
      onEnter: function (batch) {
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.1,
          overwrite: true
        });
      }
    });
  })();

  // 8. GSAP hover scale on project cards
  (function () {
    var imgs = document.querySelectorAll('.project-card__img');
    if (!imgs.length) return;
    imgs.forEach(function (img) {
      img.addEventListener('mouseenter', function () {
        gsap.to(img, {
          scale: 1.03,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
      img.addEventListener('mouseleave', function () {
        gsap.to(img, {
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
    });
  })();

})();

// ─── Fancybox ──────────────────────────────────────

Fancybox.bind('[data-fancybox="gallery"]', {
  animated: true,
  dragToClose: true,
  Toolbar: {
    display: {
      left: ['infobar'],
      middle: [],
      right: ['slideshow', 'thumbs', 'close']
    }
  }
});

Fancybox.bind('[data-fancybox="logo-popup"]', {
  Images: { zoom: true },
  showClass: 'fancybox-zoomIn',
  hideClass: 'fancybox-zoomOut',
  animated: true,
  speed: 450,
  backdropClick: 'close',
  Toolbar: {
    display: {
      left: [],
      main: [],
      right: ['close']
    }
  }
});
