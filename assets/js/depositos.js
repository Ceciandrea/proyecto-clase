document.getElementById('realizarDeposito').addEventListener('click', function() {
  let tipoDeposito = document.getElementById('depositType').value;
  let monto = parseInt(document.getElementById('depositAmount').value);
  let saldoActual = parseInt(document.getElementById('cantidadDinero').innerText);

  if (tipoDeposito === 'propia') {
    // Actualizar el saldo en la pantalla principal
    if (!isNaN(monto) && monto > 0) {
      let nuevoSaldo = saldoActual + monto;
      document.getElementById('cantidadDinero').innerText = nuevoSaldo.toString();
      alert('Depósito realizado exitosamente a tu cuenta. Nuevo saldo: ' + nuevoSaldo);
    } else {
      alert('Por favor, introduce un monto válido.');
    }
  } else if (tipoDeposito === 'terceros') {
    // Redirigir a la página de enviar dinero
    window.location.href = "/assets/page/enviar_dinero.html";
  }
});
  