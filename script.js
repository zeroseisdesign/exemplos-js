        //Exemplo operacións lóxicas
        let idade = 19;
        let tenCarnet = true;

        if (idade >= 18 && tenCarnet) {
            console.log("Pode conducir");
        }

        //Secuencias dun programa
        let num = 5;
        let dobre = num * 2;
        console.log(dobre);

        //Ordinograma
        let num2 = 3;

        if (num2 > 0) {
            console.log("É maior que 0");
        }
        else {
            console.log("É menor ou igual que 0");
        }

        //Pseudocódigo traducido
        let numero = prompt("Introduce un número");

        if (numero > 0) {
            document.getElementById("resultado").innerHTML = "<i>Positivo</i>";
        } else {
            document.getElementById("resultado").textContent = "Negativo";
        }

        //Con formulario
        function comprobar() {
            let numeroInput = document.getElementById("numeroinput").value;

            if (numeroInput > 0) {
                alert("positivo");
            } else {
                alert("negativo");
            }
        }

        //Con formulario y resultado en tag de página
        function comprobarTag() {
            let numeroInput = document.getElementById("numeroinput2").value;
            let resultado = document.getElementById("resultado");

            if (numeroInput > 0) {
                resultado.innerHTML = "positivo";
            } else {
                resultado.innerHTML = "negativo";
            }
        }

        //Con formulario y resultado en tag de página y evento desde el script
        let boton = document.getElementById("btnComprobar");

        boton.addEventListener("click", comprobarTag3);

        function comprobarTag3() {
            let numeroInput = document.getElementById("numeroinput3").value;
            let resultado = document.getElementById("resultado2");

            if (numeroInput > 0) {
                resultado.innerHTML = "positivo";
            } else {
                resultado.innerHTML = "negativo";
            }
        }

        //exemplo evento
        let botonSaudo =
            document.getElementById("btnSaudo");
        botonSaudo.addEventListener("click", saudar);
        function saudar() {
            alert("Ola mundo");
        }

        let botonCambio = document.getElementById("btnCambiar");

        botonCambio.addEventListener("click", cambiarTexto);

        function cambiarTexto() {
            let texto = document.getElementById("texto");
            texto.innerHTML = "Texto modificado";
        }

        //Cambio de propiedades
        let botonBack = document.getElementById("btnColor");

        botonBack.addEventListener("click", cambiarCor);

        function cambiarCor() {
            document.body.style.backgroundColor = "lightblue";
        }

        // Menú móbil: mostrar/ocultar navegación con toggle
        let botonMenu = document.querySelector("#btnMenu");
        let menuMobile = document.querySelector(".nav-mobile");

        botonMenu.addEventListener("click", function () {
            menuMobile.classList.toggle("visible");
        });
