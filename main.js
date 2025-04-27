document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);

      fetch('procesar.php', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then(data => {
        const respuesta = document.getElementById('respuesta');
        if (data.success) {
          respuesta.innerHTML = `<p class="exito">${data.mensaje}</p>`;
          contactForm.reset(); // Limpia el formulario si fue exitoso
        } else {
          respuesta.innerHTML = `<p class="error">${data.mensaje}</p>`;
        }
      })
      .catch(error => {
        document.getElementById('respuesta').innerHTML = '<p class="error">Error al enviar el mensaje.</p>';
        console.error('Error:', error);
      });
    });
  }
});
