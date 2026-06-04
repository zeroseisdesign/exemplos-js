
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
const ctx = c.getContext("2d");
let cw = (c.width = window.innerWidth);
let ch = (c.height = window.innerHeight);
let radius = Math.max(cw,ch);
const particles = Array(99);

for (let i = 0; i < particles.length; i++) {
  particles[i] = {
    x: 0,
    y: 0,
    scale: 0, 
    rotate: 0,
    img: new Image()
  }  
  particles[i].img.src = "https://assets.codepen.io/16327/flair-"+(2+i%21)+".png";
}

const tl = gsap.timeline({onUpdate:draw})
  .fromTo(particles, {
    x:(i)=> {
      const angle = (i/particles.length * Math.PI *2)- Math.PI/2
      return Math.cos(angle*10) * radius// * i/particles.length
    },
    y:(i)=> {
      const angle = (i/particles.length * Math.PI *2)- Math.PI/2
      return Math.sin(angle*10) * radius// * i/particles.length
    },
    scale: 1.1,
    rotate: 0
  },{
    duration: 5,
    ease: "sine",
    x: 0,
    y: 0,
    scale: 0,
    rotate: -3,
    stagger:{each:-0.05, repeat:-1}
  }, 0)
  .seek(99)

function draw(){  
  particles.sort( (a,b) => a.scale - b.scale ) // sort by scale to set z-indexing  
  ctx.clearRect(0, 0, cw, ch);
  particles.forEach((p, i) => {
    ctx.translate(cw / 2, ch / 2);
    ctx.rotate( p.rotate );
    ctx.drawImage(
      p.img,
      p.x,
      p.y,
      p.img.width * p.scale,
      p.img.height * p.scale
    );
    ctx.resetTransform();
  });
}

window.addEventListener("resize", () => {
  cw = c.width = innerWidth;
  ch = c.height = innerHeight;
  radius = Math.max(cw,ch);
  tl.invalidate();
});

c.addEventListener('pointerup', ()=>{ 
  gsap.to(tl, { 
    timeScale: tl.isActive() ? 0 : 1 // use timeScale to toggle play / pause
  })
})



