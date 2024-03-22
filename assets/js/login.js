document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores ingresados en los campos
    const email = document.querySelector("#login-form input[type='email']").value;
    const password = document.querySelector("#login-form input[type='password']").value;

    // Validación de credenciales (simulada)
    const validEmail = "usuario@example.com";
    const validPassword = "contraseña123";

    if (email === validEmail && password === validPassword) {
      // Credenciales correctas, redirigir a la página del menú principal
      window.location.href = "menu_principal.html";
    } else {
      // Credenciales incorrectas, mostrar mensaje de error
      alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  });
});

  

