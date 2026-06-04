
        let indiceSlideActual = 0;

        function cambiarSlide(n) {
            mostrarSlide(indiceSlideActual += n);
        }

        function irAlSlide(n) {
            mostrarSlide(indiceSlideActual = n);
        }

        function mostrarSlide(n) {
            const slides = document.querySelectorAll('.carrusel-slide');
            const dots = document.querySelectorAll('.dot');

            if (n >= slides.length) {
                indiceSlideActual = 0;
            }
            if (n < 0) {
                indiceSlideActual = slides.length - 1;
            }

            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            slides[indiceSlideActual].classList.add('active');
            dots[indiceSlideActual].classList.add('active');
        }

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (!menuToggle || !navMenu) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const menuAbierto = navMenu.classList.toggle("menu-abierto");
    menuToggle.classList.toggle("menu-abierto", menuAbierto);
    menuToggle.setAttribute("aria-expanded", menuAbierto);
    menuToggle.setAttribute("aria-label", menuAbierto ? "Cerrar menu" : "Abrir menu");
  });

  navMenu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      navMenu.classList.remove("menu-abierto");
      menuToggle.classList.remove("menu-abierto");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
});

const c = document.querySelector("canvas");

if (c && window.gsap) {
  const ctx = c.getContext("2d");
  let cw = (c.width = window.innerWidth);
  let ch = (c.height = window.innerHeight);
  let radius = Math.max(cw, ch);

  const iconosArquitectura = [
    iconoCamara,
    iconoDiafragma,
    iconoPlano,
    iconoRegla,
    iconoColumna,
    iconoArco
  ];
  const particles = Array(84);

  function crearIcono(svg) {
    const img = new Image();
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    return img;
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i] = {
      x: 0,
      y: 0,
      scale: 0,
      rotate: 0,
      size: 42 + (i % 4) * 9,
      img: crearIcono(iconosArquitectura[i % iconosArquitectura.length]())
    };
  }

  const tl = gsap.timeline({ onUpdate: draw })
    .fromTo(particles, {
      x: (i) => {
        const angle = (i / particles.length * Math.PI * 2) - Math.PI / 2;
        return Math.cos(angle * 9) * radius;
      },
      y: (i) => {
        const angle = (i / particles.length * Math.PI * 2) - Math.PI / 2;
        return Math.sin(angle * 9) * radius;
      },
      scale: 1,
      rotate: (i) => (i % 2 ? 0.25 : -0.25)
    }, {
      duration: 6,
      ease: "sine.inOut",
      x: 0,
      y: 0,
      scale: 0,
      rotate: -2.8,
      stagger: { each: -0.055, repeat: -1 }
    }, 0)
    .seek(99);

  function draw() {
    particles.sort((a, b) => a.scale - b.scale);
    ctx.clearRect(0, 0, cw, ch);

    particles.forEach((p) => {
      const size = p.size * p.scale;

      ctx.translate(cw / 2, ch / 2);
      ctx.rotate(p.rotate);
      ctx.globalAlpha = Math.min(0.95, p.scale + 0.15);
      ctx.drawImage(p.img, p.x - size / 2, p.y - size / 2, size, size);
      ctx.resetTransform();
      ctx.globalAlpha = 1;
    });
  }

  window.addEventListener("resize", () => {
    cw = c.width = innerWidth;
    ch = c.height = innerHeight;
    radius = Math.max(cw, ch);
    tl.invalidate();
  });

  c.addEventListener("pointerup", () => {
    gsap.to(tl, {
      timeScale: tl.isActive() ? 0 : 1
    });
  });
}

function baseIcono(contenido) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
    <rect width="96" height="96" rx="18" fill="#111312"/>
    <rect x="7" y="7" width="82" height="82" rx="14" fill="none" stroke="#d4af37" stroke-width="3"/>
    ${contenido}
  </svg>`;
}

function iconoCamara() {
  return baseIcono(`
    <path d="M20 35h15l5-8h18l5 8h13v34H20z" fill="none" stroke="#f4f0e6" stroke-width="5" stroke-linejoin="round"/>
    <circle cx="48" cy="52" r="13" fill="none" stroke="#d4af37" stroke-width="5"/>
    <circle cx="72" cy="42" r="3" fill="#f4f0e6"/>
  `);
}

function iconoDiafragma() {
  return baseIcono(`
    <circle cx="48" cy="48" r="29" fill="none" stroke="#f4f0e6" stroke-width="5"/>
    <path d="M48 19l12 29H36zM77 48L48 60V36zM48 77L36 48h24zM19 48l29-12v24z" fill="none" stroke="#d4af37" stroke-width="4" stroke-linejoin="round"/>
  `);
}

function iconoPlano() {
  return baseIcono(`
    <path d="M22 30h52v40H22z" fill="none" stroke="#f4f0e6" stroke-width="5"/>
    <path d="M31 61h17V45h17M31 38h16M57 38h8" fill="none" stroke="#d4af37" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  `);
}

function iconoRegla() {
  return baseIcono(`
    <path d="M24 67l43-43 10 10-43 43z" fill="none" stroke="#f4f0e6" stroke-width="5" stroke-linejoin="round"/>
    <path d="M36 60l-5-5M45 51l-4-4M54 42l-5-5M63 33l-4-4" stroke="#d4af37" stroke-width="4" stroke-linecap="round"/>
  `);
}

function iconoColumna() {
  return baseIcono(`
    <path d="M30 28h36M25 70h46M32 36h32M36 36v34M48 36v34M60 36v34" fill="none" stroke="#f4f0e6" stroke-width="5" stroke-linecap="round"/>
    <path d="M27 28l7-8h28l7 8" fill="none" stroke="#d4af37" stroke-width="5" stroke-linejoin="round"/>
  `);
}

function iconoArco() {
  return baseIcono(`
    <path d="M26 72V48a22 22 0 0 1 44 0v24" fill="none" stroke="#f4f0e6" stroke-width="5" stroke-linecap="round"/>
    <path d="M37 72V49a11 11 0 0 1 22 0v23M24 72h48" fill="none" stroke="#d4af37" stroke-width="5" stroke-linecap="round"/>
  `);
}



