document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const correo = document.getElementById("correo");
    const contrasena = document.getElementById("contrasena");
    const idade = document.getElementById("idade");
    const provincia = document.getElementById("provincia");
    const sexoInputs = Array.from(document.querySelectorAll("input[name='sexo']"));
    const lenguajeInputs = Array.from(document.querySelectorAll("#lenguajesGroup input[type='checkbox']"));
    const comentarios = document.getElementById("comentarios");
    const condiciones = document.getElementById("condiciones");
    const comentariosCount = document.getElementById("comentariosCount");
    const previewCard = document.getElementById("previewCard");
    const previewContent = document.getElementById("previewContent");
    const sexoFeedback = document.getElementById("sexoFeedback");
    const lenguajesFeedback = document.getElementById("lenguajesFeedback");

    const MAX_COMENTARIOS = 300;
    comentarios.setAttribute("maxlength", MAX_COMENTARIOS);
    comentariosCount.textContent = `0 / ${MAX_COMENTARIOS}`;
    sexoFeedback.style.display = "none";
    lenguajesFeedback.style.display = "none";

    console.log("assets/script.js cargado correctamente");

    comentarios.addEventListener("input", () => {
        const currentLength = comentarios.value.trim().length;
        comentariosCount.textContent = `${currentLength} / ${MAX_COMENTARIOS}`;
        if (currentLength >= 10) {
            comentarios.classList.remove("is-invalid");
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();

        resetGroupValidation();
        const fieldsAreValid = validateFields();
        const sexIsValid = validateSex();
        const lenguajesIsValid = validateLenguajes();
        const formIsValid = fieldsAreValid && sexIsValid && lenguajesIsValid;

        console.debug("submit: fieldsAreValid=", fieldsAreValid, "sexIsValid=", sexIsValid, "lenguajesIsValid=", lenguajesIsValid);
        const invalids = Array.from(form.querySelectorAll(":invalid")).map(el => ({ id: el.id || '(sin id)', name: el.name || '(sin name)', type: el.type, value: el.value, message: el.validationMessage }));
        console.debug("submit: invalid elements=", invalids);

        form.classList.add("was-validated");

        if (!formIsValid) {
            console.warn("submit: formulario no válido, abortando showPreview");
            invalids.forEach(inv => console.warn(`campo inválido: ${inv.id} name=${inv.name} type=${inv.type} mensaje=${inv.message}`));
            const firstInvalid = form.querySelector(':invalid');
            if (firstInvalid) {
                firstInvalid.focus({ preventScroll: true });
            }
            form.reportValidity();
            return;
        }

        showPreview();
    });

    form.addEventListener("reset", () => {
        setTimeout(() => {
            form.classList.remove("was-validated");
            resetGroupValidation();
            previewCard.classList.add("d-none");
            previewContent.innerHTML = "";
            comentariosCount.textContent = `0 / ${MAX_COMENTARIOS}`;
        }, 0);
    });

    function validateFields() {
        const nombreValid = validateTextField(nombre, 3, "Introduce un nome válido.");
        const apellidosValid = validateApellidos();
        const correoValid = validateEmail();
        const contrasenaValid = validatePassword();
        const idadeValid = validateAge();
        const provinciaValid = validateProvince();
        const comentariosValid = validateComentarios();
        const condicionesValid = validateCondiciones();

        return nombreValid && apellidosValid && correoValid && contrasenaValid && idadeValid && provinciaValid && comentariosValid && condicionesValid;
    }

    function validateTextField(input, minLength, message) {
        const valid = input.value.trim().length >= minLength;
        if (!valid) {
            input.setCustomValidity(message);
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
        } else {
            input.setCustomValidity("");
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        }
        return valid;
    }

    function validateApellidos() {
        const value = apellidos.value.trim();
        const hasTwoWords = /^\S+\s+\S+/.test(value);
        const valid = hasTwoWords;
        if (!valid) {
            apellidos.setCustomValidity("Introduce os dous apelidos.");
            apellidos.classList.add("is-invalid");
            apellidos.classList.remove("is-valid");
        } else {
            apellidos.setCustomValidity("");
            apellidos.classList.remove("is-invalid");
            apellidos.classList.add("is-valid");
        }
        return valid;
    }

    function validateEmail() {
        const valid = correo.checkValidity();
        if (!valid) {
            correo.setCustomValidity("Introduce un correo electrónico válido.");
            correo.classList.add("is-invalid");
            correo.classList.remove("is-valid");
        } else {
            correo.setCustomValidity("");
            correo.classList.remove("is-invalid");
            correo.classList.add("is-valid");
        }
        return valid;
    }

    function validatePassword() {
        const valid = contrasena.value.trim().length >= 8;
        if (!valid) {
            contrasena.setCustomValidity("A contraseña debe ter mínimo 8 caracteres.");
            contrasena.classList.add("is-invalid");
            contrasena.classList.remove("is-valid");
        } else {
            contrasena.setCustomValidity("");
            contrasena.classList.remove("is-invalid");
            contrasena.classList.add("is-valid");
        }
        return valid;
    }

    function validateAge() {
        const ageValue = Number(idade.value);
        const valid = idade.value && ageValue >= 18 && ageValue <= 99;
        if (!valid) {
            idade.setCustomValidity("A idade debe estar entre 18 e 99 anos.");
            idade.classList.add("is-invalid");
            idade.classList.remove("is-valid");
        } else {
            idade.setCustomValidity("");
            idade.classList.remove("is-invalid");
            idade.classList.add("is-valid");
        }
        return valid;
    }

    function validateProvince() {
        const valid = !!provincia.value;
        if (!valid) {
            provincia.setCustomValidity("Selecciona unha provincia.");
            provincia.classList.add("is-invalid");
            provincia.classList.remove("is-valid");
        } else {
            provincia.setCustomValidity("");
            provincia.classList.remove("is-invalid");
            provincia.classList.add("is-valid");
        }
        return valid;
    }

    function validateComentarios() {
        const valid = comentarios.value.trim().length >= 10;
        if (!valid) {
            comentarios.setCustomValidity("Escribe un comentario máis completo.");
            comentarios.classList.add("is-invalid");
            comentarios.classList.remove("is-valid");
        } else {
            comentarios.setCustomValidity("");
            comentarios.classList.remove("is-invalid");
            comentarios.classList.add("is-valid");
        }
        return valid;
    }

    function validateCondiciones() {
        const valid = condiciones.checked;
        if (!valid) {
            condiciones.setCustomValidity("Debes aceptar as condicións.");
            condiciones.classList.add("is-invalid");
            condiciones.classList.remove("is-valid");
        } else {
            condiciones.setCustomValidity("");
            condiciones.classList.remove("is-invalid");
            condiciones.classList.add("is-valid");
        }
        return valid;
    }

    function validateSex() {
        const selected = sexoInputs.some((input) => input.checked);
        sexoFeedback.style.display = selected ? "none" : "block";
        sexoInputs.forEach((input) => {
            input.classList.toggle("is-invalid", !selected);
            input.classList.toggle("is-valid", selected);
            input.setCustomValidity(selected ? "" : "Selecciona unha opción.");
        });
        return selected;
    }

    function validateLenguajes() {
        const selected = lenguajeInputs.some((input) => input.checked);
        lenguajesFeedback.style.display = selected ? "none" : "block";
        lenguajeInputs.forEach((input) => {
            input.classList.toggle("is-invalid", !selected);
            input.classList.toggle("is-valid", selected);
            input.setCustomValidity(selected ? "" : "Selecciona polo menos unha linguaxe.");
        });
        return selected;
    }

    function resetGroupValidation() {
        sexoFeedback.style.display = "none";
        lenguajesFeedback.style.display = "none";
        sexoInputs.forEach((input) => {
            input.classList.remove("is-invalid", "is-valid");
            input.setCustomValidity("");
        });
        lenguajeInputs.forEach((input) => {
            input.classList.remove("is-invalid", "is-valid");
            input.setCustomValidity("");
        });
    }

    function showPreview() {
        const selectedSex = sexoInputs.find((input) => input.checked)?.value || "";
        const selectedLanguages = lenguajeInputs.filter((input) => input.checked).map((input) => input.value);

        previewContent.innerHTML = `
            <p><strong>Nome:</strong> ${sanitize(nombre.value)}</p>
            <p><strong>Apelidos:</strong> ${sanitize(apellidos.value)}</p>
            <p><strong>Correo electrónico:</strong> ${sanitize(correo.value)}</p>
            <p><strong>Idade:</strong> ${sanitize(idade.value)}</p>
            <p><strong>Provincia:</strong> ${sanitize(provincia.value)}</p>
            <p><strong>Sexo:</strong> ${sanitize(selectedSex)}</p>
            <p><strong>Linguaxes favoritas:</strong> ${sanitize(selectedLanguages.join(", "))}</p>
            <p><strong>Comentarios:</strong> ${sanitize(comentarios.value)}</p>
        `;

        previewCard.classList.remove("d-none");
        previewCard.style.display = "block";
        previewCard.style.zIndex = "999";
        setTimeout(() => {
            previewCard.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 80);
    }

    function sanitize(value) {
        const div = document.createElement("div");
        div.textContent = value;
        return div.innerHTML;
    }
});
