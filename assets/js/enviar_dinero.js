document.addEventListener("DOMContentLoaded", function() {
  var contactItems = document.querySelectorAll(".list-group-item");

  contactItems.forEach(function(contactItem) {
    contactItem.addEventListener("click", function() {
      var contactName = this.querySelector(".contact-name").innerText;
      var bank = this.querySelector(".contact-details").innerText.split(", Banco: ")[1];
      
      document.getElementById("contactName").value = contactName;
      document.getElementById("bank").value = bank;
      
      document.getElementById("transactionForm").style.display = "block";
    });
  });

  var transactionForm = document.getElementById("transactionForm");

  transactionForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    var amount = document.getElementById("amount").value;
    var confirmationMessage = "Se ha enviado $" + amount + " al contacto.";

    // Aquí puedes implementar el código para enviar el dinero y luego mostrar el mensaje de confirmación
    alert("¿Estás seguro que deseas depositar?");

    // Ocultar el formulario después de enviar el dinero
    transactionForm.style.display = "none";
  });
});

  

  