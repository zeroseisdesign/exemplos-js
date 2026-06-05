// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })

  const toggleButton = document.getElementById('toggleMenu');
  const menu = document.getElementById('menu');
  if (toggleButton && menu) {
    toggleButton.addEventListener('click', () => {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    })
  }

  const galleryItems = document.querySelectorAll('.grid-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('clicked');
    });
  });
})();

 