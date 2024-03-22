(document).ready(function(){
    $('#depositForm').submit(function(e){
      e.preventDefault(); // Prevent form submission
      
      // Get deposit amount
      var depositAmount = parseFloat($('#depositAmount').val());
      
      // Validate deposit amount
      if(isNaN(depositAmount) || depositAmount <= 0) {
        alert("Por favor, introduzca un monto válido para depositar.");
        return;
      }
      
      // Update saldo
      var saldoElement = $('#saldo');
      var saldoText = saldoElement.text();
      var currentSaldo = parseFloat(saldoText.match(/\d+/)[0]); // Extracting current saldo from text
      var newSaldo = currentSaldo + depositAmount;
      saldoElement.text("Dinero en cuenta: " + newSaldo);
      
      // Reset deposit input
      $('#depositAmount').val('');
    });
  });
  