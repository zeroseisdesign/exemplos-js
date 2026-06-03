document.addEventListener("DOMContentLoaded", () => {
    // Referencias de elementos del DOM
    const formulario = document.getElementById("registroForm");
    const botonMenu = document.getElementById("btnMenu");
    const menu = document.querySelector(".nav-mobile");
    const provinciaSelect = document.getElementById("provincia");

    // --- CONTROL DEL MENÚ MÓVIL  ---
    if (botonMenu && menu) {
        botonMenu.addEventListener("click", () => {
            const isExpanded = botonMenu.getAttribute("aria-expanded") === "true";
            
           
            menu.classList.toggle("visible");
            botonMenu.classList.toggle("active");
            
           
            botonMenu.setAttribute("aria-expanded", !isExpanded);
        });
    }

    // --- FORMULARIOS ---
    if (provinciaSelect) {
        provinciaSelect.addEventListener("change", (e) => {
            console.log("Provincia seleccionada:", e.target.value);
        });
    }

    if (formulario) {
        formulario.addEventListener("submit", (event) => {
            // Validar requerimiento personalizado del grupo de checkboxes
            const checkboxesValidos = validarGrupoCheckboxes();

            // Evaluar la validez general utilizando la API de validación nativa de HTML5
            if (!formulario.checkValidity() || !checkboxesValidos) {
                event.preventDefault(); // Detiene el envío si existen errores
                event.stopPropagation();
            } else {
                event.preventDefault();
                console.log("Formulario completamente válido. Procesando envío de datos...");
                // Aquí se integraría la llamada fetch() o el envío definitivo
            }

            
            formulario.classList.add("was-validated");

        
            Array.from(formulario.elements).forEach((campo) => {
                validarCampoIndividual(campo);
            });
        });

        
        formulario.addEventListener("input", (e) => {
            if (formulario.classList.contains("was-validated")) {
                validarCampoIndividual(e.target);
            }
        });
    }

   
    function validarCampoIndividual(campo) {
        if (!campo.id) return;

        //nombre
        if (campo.id === "nombre") {
            const errorDiv = document.getElementById("error-nombre");
            if (campo.value.trim().length < 3) {
                campo.setCustomValidity("Invalido");
                if (errorDiv) errorDiv.textContent = "El nombre debe tener mínimo 3 caracteres.";
            } else {
                campo.setCustomValidity("");
            }
        }

        // apellidos
        if (campo.id === "apellido") {
            const regexApellidos = /^[A-Za-záéíóúÁÉÍÓÚñÑ]+(\s[A-Za-záéíóúÁÉÍÓÚñÑ]+)+$/;
            if (!regexApellidos.test(campo.value.trim())) {
                campo.setCustomValidity("Invalido");
            } else {
                campo.setCustomValidity("");
            }
        }
    }

    // Checkbox de lenguajes
    function validarGrupoCheckboxes() {
        const checkboxes = formulario.querySelectorAll("input[name='lenguajes']");
        const feedback = document.getElementById("feedback-lenguajes");
        const algunoSeleccionado = Array.from(checkboxes).some(cb => cb.checked);

        checkboxes.forEach(cb => {
            if (!algunoSeleccionado) {
                cb.setCustomValidity("Seleccione al menos una opción.");
            } else {
                cb.setCustomValidity("");
            }
        });

        if (feedback) {
            feedback.style.display = algunoSeleccionado ? "none" : "block";
        }

        return algunoSeleccionado;
    }

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
});