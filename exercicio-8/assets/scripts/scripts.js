const botonMenu = document.querySelector("#boton-menu");
        const menu = document.querySelector("#menu");

        botonMenu.addEventListener("click", () => {
            menu.classList.toggle("mostrar");
        });