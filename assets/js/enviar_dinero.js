document.addEventListener('DOMContentLoaded', function() {
  // Referencia al botón para abrir el formulario de nuevo contacto
  let addContactButton = document.getElementById('addContactButton');

  // Referencia al contenedor del formulario de contacto
  let contactFormContainer = document.getElementById('contactFormContainer');

  // Referencia al formulario dentro del contenedor
  let contactForm = document.getElementById('contactForm');

  // Evento para mostrar el formulario de nuevo contacto
  addContactButton.addEventListener('click', function() {
    contactFormContainer.style.display = 'block';
  });
});






//enviar dinero 
document.addEventListener("DOMContentLoaded", function() {
  let contactItems = document.querySelectorAll(".list-group-item");

  contactItems.forEach(function(contactItem) {
    contactItem.addEventListener("click", function() {
      let contactName = this.querySelector(".contact-name").innerText;
      let bank = this.querySelector(".contact-details").innerText.split(", Banco: ")[1];
      
      document.getElementById("contactName").value = contactName;
      document.getElementById("bank").value = bank;
      
      document.getElementById("transactionForm").style.display = "block";
    });
  });

  let transactionForm = document.getElementById("transactionForm");

  transactionForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let amount = document.getElementById("amount").value;
    let confirmationMessage = "Se ha enviado $" + amount + " al contacto.";

    // Aquí puedes implementar el código para enviar el dinero y luego mostrar el mensaje de confirmación
    alert("¿Estás seguro que deseas depositar?");

    // Ocultar el formulario después de enviar el dinero
    transactionForm.style.display = "none";
  });
});

  

  