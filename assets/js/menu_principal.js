document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia a los botones
    const depositarBtn = document.querySelector("a[href='/assets/page/depositos.html']");
    const enviarDineroBtn = document.querySelector("a[href='/assets/page/enviar_dinero.html']");
    const ultimosMovBtn = document.querySelector("a[href='/assets/page/ultimos_mov.html']");
  
    // Agregar evento clic para el botón "Depositar"
    depositarBtn.addEventListener("click", function(event) {
      event.preventDefault(); // Evitar la acción predeterminada del enlace
      alert("Redirigiendo a la pantalla de Depósitos.");
      window.location.href = "/assets/page/depositos.html";
    });
  
    // Agregar evento clic para el botón "Enviar Dinero"
    enviarDineroBtn.addEventListener("click", function(event) {
      event.preventDefault(); // Evitar la acción predeterminada del enlace
      alert("Redirigiendo a la pantalla de Enviar Dinero.");
      window.location.href = "/assets/page/enviar_dinero.html";
    });
  
    // Agregar evento clic para el botón "Últimos Movimientos"
    ultimosMovBtn.addEventListener("click", function(event) {
      event.preventDefault(); // Evitar la acción predeterminada del enlace
      alert("Redirigiendo a la pantalla de Últimos Movimientos.");
      window.location.href = "/assets/page/ultimos_mov.html";
    });
  });
  

