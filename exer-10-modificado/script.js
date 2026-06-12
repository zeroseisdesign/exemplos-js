document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('form-contacto');
  if (!form) {
    console.error('Form element not found');
    return;
  }

  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  var telefono = document.getElementById('telefono');
  var texto = document.getElementById('texto');
  var successMsg = document.getElementById('form-success');

  if (!nome || !email || !telefono || !texto || !successMsg) {
    console.error('Required form elements not found');
    return;
  }

  var errors = {
    nome: document.getElementById('error-nome'),
    email: document.getElementById('error-email'),
    telefono: document.getElementById('error-telefono'),
    texto: document.getElementById('error-texto')
  };

  if (!errors.nome || !errors.email || !errors.telefono || !errors.texto) {
    console.error('Error message elements not found');
    return;
  }

  function clearErrors() {
    Object.keys(errors).forEach(function (key) {
      errors[key].textContent = '';
    });
    [nome, email, telefono, texto].forEach(function (el) {
      el.classList.remove('error');
    });
    successMsg.classList.remove('visible');
  }

  function setError(el, errorEl, msg) {
    el.classList.add('error');
    errorEl.textContent = msg;
  }

  function validateNome() {
    var val = nome.value.trim();
    if (val === '') { setError(nome, errors.nome, 'O nome é obrigatorio.'); return false; }
    if (val.length < 2) { setError(nome, errors.nome, 'O nome debe ter polo menos 2 caracteres.'); return false; }
    return true;
  }

  function validateEmail() {
    var val = email.value.trim();
    if (val === '') { setError(email, errors.email, 'O email é obrigatorio.'); return false; }
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(val)) { setError(email, errors.email, 'Introduce un email válido.'); return false; }
    return true;
  }

  function validateTelefono() {
    var val = telefono.value.trim();
    if (val === '') { setError(telefono, errors.telefono, 'O teléfono é obrigatorio.'); return false; }
    var digits = val.replace(/[\s\-\+\(\)]/g, '');
    if (!/^\d{9,15}$/.test(digits)) { setError(telefono, errors.telefono, 'Introduce un teléfono válido (mín. 9 díxitos).'); return false; }
    return true;
  }

  function validateTexto() {
    var val = texto.value.trim();
    if (val === '') { setError(texto, errors.texto, 'O texto é obrigatorio.'); return false; }
    if (val.length < 10) { setError(texto, errors.texto, 'O texto debe ter polo menos 10 caracteres.'); return false; }
    return true;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    var valid = true;
    if (!validateNome()) {
      valid = false;
      nome.focus();
    }
    if (!validateEmail()) {
      valid = false;
      if (!nome.classList.contains('error')) email.focus();
    }
    if (!validateTelefono()) {
      valid = false;
      if (!nome.classList.contains('error') && !email.classList.contains('error')) telefono.focus();
    }
    if (!validateTexto()) {
      valid = false;
      if (!nome.classList.contains('error') && !email.classList.contains('error') && !telefono.classList.contains('error')) texto.focus();
    }

    if (valid) {
      successMsg.classList.add('visible');
      form.reset();
      nome.focus();
    }
  });

  nome.addEventListener('blur', validateNome);
  email.addEventListener('blur', validateEmail);
  telefono.addEventListener('blur', validateTelefono);
  texto.addEventListener('blur', validateTexto);
});
