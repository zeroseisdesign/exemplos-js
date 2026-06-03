
window.addEventListener("load", () => {
    console.log("TimeX Landing Page cargada correctamente.");

    // --- hamburguesa ---
    const btnMenu = document.getElementById("btnMenu");
    
    if (btnMenu) {
        
        btnMenu.addEventListener("click", () => {
            btnMenu.classList.toggle("hamburguesa-activa");
        });
    }

    // --- HERO ---
    const btnsClickLog = document.querySelectorAll(".btn-click-log");
    btnsClickLog.forEach(boton => {
        boton.addEventListener("click", (e) => {
            console.log(`Acción executada: ${e.target.textContent}`);
        });
    });

    // --- GALERÍA ---
    const imaxesGaleria = document.querySelectorAll(".img-galeria");

    imaxesGaleria.forEach(imaxe => {
        // Evento mouseover: Engade o efecto de ampliación suave
        imaxe.addEventListener("mouseover", () => {
            imaxe.classList.add("img-galeria-hover");
        });


        imaxe.addEventListener("mouseout", () => {
            imaxe.classList.remove("img-galeria-hover");
        });

        
        imaxe.addEventListener("click", () => {
            console.log("Imaxe seleccionada");
        });
    });

    // --- 6. EVENTO  (TABS BOOTSTRAP) ---
    const pestanas = document.querySelectorAll('button[data-bs-toggle="tab"]');
    pestanas.forEach(pestana => {
        pestana.addEventListener("shown.bs.tab", (e) => {
            console.log("Pestana activa");
        });
    });

    // --- FORMULARIO  ---
    const formulario = document.getElementById("formContacto");

    if (formulario) {
        formulario.addEventListener("submit", (event) => {
            let formValido = true;

            
            const nome = document.getElementById("nome");
            const email = document.getElementById("email");
            const telefono = document.getElementById("telefono");
            const mensaxe = document.getElementById("mensaxe");
            const condicions = document.getElementById("condicions");

           
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const regexTelefono = /^[0-9]{9,11}$/;

            
            if (nome.value.trim() === "") {
                nome.classList.add("is-invalid");
                formValido = false;
            } else {
                nome.classList.remove("is-invalid");
                nome.classList.add("is-valid");
            }

         
            if (!regexEmail.test(email.value.trim())) {
                email.classList.add("is-invalid");
                formValido = false;
            } else {
                email.classList.remove("is-invalid");
                email.classList.add("is-valid");
            }

           
            if (!regexTelefono.test(telefono.value.trim())) {
                telefono.classList.add("is-invalid");
                formValido = false;
            } else {
                telefono.classList.remove("is-invalid");
                telefono.classList.add("is-valid");
            }

           
            if (mensaxe.value.trim() === "") {
                mensaxe.classList.add("is-invalid");
                formValido = false;
            } else {
                mensaxe.classList.remove("is-invalid");
                mensaxe.classList.add("is-valid");
            }

            
            if (!condicions.checked) {
                condicions.classList.add("is-invalid");
                formValido = false;
            } else {
                condicions.classList.remove("is-invalid");
                condicions.classList.add("is-valid");
            }

           
            if (!formValido) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault(); // Evitamos o refresco real de exemplo
                console.log("Formulario validado con éxito. Enviando datos...");
                alert("Solicitude enviada correctamente.");
                formulario.reset();
                
                document.querySelectorAll(".form-control, .form-check-input").forEach(el => el.classList.remove("is-valid"));
            }
        });
    }

    // --- 9. EVENTO scroll (Cambio de deseño na navegación) ---
    const barraNavegacion = document.getElementById("mainNav");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            barraNavegacion.classList.add("navbar-scrolled");
            console.log("Mostrar cambios na navegación"); //  evento scroll
        } else {
            barraNavegacion.classList.remove("navbar-scrolled");
        }
    });

     // --- GSAP  ---
    const flair = gsap.utils.toArray(".flair");
    if (flair.length > 0) {
        let index = 0;
        const gapDistance = 100; 
        const wrapper = gsap.utils.wrap(0, flair.length);
        
        let mousePos = { x: 0, y: 0 };
        let lastMousePos = { x: 0, y: 0 };
        let cachedMousePos = { x: 0, y: 0 };

        window.addEventListener("mousemove", (e) => {
            mousePos.x = e.clientX;
            mousePos.y = e.clientY;
        });

        gsap.ticker.add(() => {
            let travelDistance = Math.hypot(
                lastMousePos.x - mousePos.x,
                lastMousePos.y - mousePos.y
            );

            cachedMousePos.x = gsap.utils.interpolate(cachedMousePos.x || mousePos.x, mousePos.x, 0.1);
            cachedMousePos.y = gsap.utils.interpolate(cachedMousePos.y || mousePos.y, mousePos.y, 0.1);

            if (travelDistance > gapDistance) {
                animateImage();
                lastMousePos.x = mousePos.x;
                lastMousePos.y = mousePos.y;
            }
        });

        function animateImage() {
            let wrappedIndex = wrapper(index);
            let img = flair[wrappedIndex];
            
            gsap.killTweensOf(img);
            gsap.set(img, { clearProps: "all" });
            
            gsap.set(img, {
                opacity: 1,
                left: mousePos.x,
                top: mousePos.y,
                xPercent: -50,
                yPercent: -50,
            });

            let tl = gsap.timeline();
            tl.from(img, {
                opacity: 0,
                scale: 0,
                ease: "elastic.out(1,0.3)",
            })
            .to(img, {
                rotation: "random([-360, 360])",
            }, "<")
            .to(img, {
                y: "120vh",
                ease: "back.in(.4)",
                duration: 1,
            }, 0);

            index++;
        }
    }

    /*fancybox*/
    Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
});