// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("formulario");

  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const edad = document.getElementById("edad");
  const provincia = document.getElementById("provincia");
  const lenguajes = document.querySelectorAll("input[name='lenguajes']");
  const errorLenguajes = document.getElementById("errorLenguajes");

  form.addEventListener("submit", (e) => {

    let valido = true;

    // Nombre
    if (nombre.value.trim().length < 3) {
      nombre.classList.add("is-invalid");
      valido = false;
    } else {
      nombre.classList.remove("is-invalid");
      nombre.classList.add("is-valid");
    }

    // Apellidos (dos palabras)
    const regexApellidos = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(\s[A-Za-zÁÉÍÓÚáéíóúñÑ]+)+$/;
    if (!regexApellidos.test(apellidos.value.trim())) {
      apellidos.classList.add("is-invalid");
      valido = false;
    } else {
      apellidos.classList.remove("is-invalid");
      apellidos.classList.add("is-valid");
    }

    // Email
    if (!email.checkValidity()) {
      email.classList.add("is-invalid");
      valido = false;
    } else {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
    }

    // Contraseña
    if (password.value.trim().length < 8) {
      password.classList.add("is-invalid");
      valido = false;
    } else {
      password.classList.remove("is-invalid");
      password.classList.add("is-valid");
    }

    // Edad
    const edadNum = parseInt(edad.value);
    if (edadNum < 18 || edadNum > 99) {
      edad.classList.add("is-invalid");
      valido = false;
    } else {
      edad.classList.remove("is-invalid");
      edad.classList.add("is-valid");
    }

    // Provincia
    if (provincia.value === "") {
      provincia.classList.add("is-invalid");
      valido = false;
    } else {
      provincia.classList.remove("is-invalid");
      provincia.classList.add("is-valid");
    }

    // Lenguajes (al menos uno)
    let algunoMarcado = false;
    lenguajes.forEach(chk => {
      if (chk.checked) algunoMarcado = true;
    });

    if (!algunoMarcado) {
      errorLenguajes.style.display = "block";
      valido = false;
    } else {
      errorLenguajes.style.display = "none";
    }

    // Evitar envío si hay errores
    if (!valido) e.preventDefault();
  });
});