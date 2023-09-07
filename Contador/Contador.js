document.addEventListener("DOMContentLoaded", function () {
  function actualizarCuenta() {  
  const anioActual = new Date();
  const finDeAnio = new Date(anioActual.getFullYear(), 11, 31, 23, 59, 59);

  const visorAnioNuevo = document.querySelector(".anio-actual");
  const visorDiasRestantes = document.querySelector(".dias");
  const visorHorasRestantes = document.querySelector(".horas");
  const visorMinutosRestantes = document.querySelector(".minutos");
  const visorSegundosRestantes = document.querySelector(".segundos");

  const tiempoRestanteEnMili = finDeAnio - anioActual;
  const diasRestantes = Math.floor(tiempoRestanteEnMili / (1000 * 60 * 60 * 24));
  const horasRestantes = Math.floor((tiempoRestanteEnMili % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutosRestantes = Math.floor((tiempoRestanteEnMili % (1000 * 60 * 60)) / (1000 * 60));
  const segundosRestantes = Math.floor((tiempoRestanteEnMili % (1000 * 60)) / 1000);

  visorDiasRestantes.textContent = diasRestantes
  visorHorasRestantes.textContent = horasRestantes;
  visorMinutosRestantes.textContent = minutosRestantes;
  visorSegundosRestantes.textContent = segundosRestantes;
  visorAnioNuevo.textContent = anioActual.getFullYear()+1;
}
setInterval(actualizarCuenta,1000);
actualizarCuenta();
});
