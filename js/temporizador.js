let tiempoTotal = 0;
let tiempoRestante = 0;
let temporizadorInterval = null;

function iniciarTemporizador() {
  const horas = parseInt(document.getElementById('inputHoras').value) || 0;
  const minutos = parseInt(document.getElementById('inputMinutos').value) || 0;
  const segundos = parseInt(document.getElementById('inputSegundos').value) || 0;

  tiempoTotal = horas * 3600 + minutos * 60 + segundos;
  tiempoRestante = tiempoTotal;
  mostrarTiempo();

  detenerTemporizador();
  temporizadorInterval = setInterval(actualizarTemporizador, 1000);
}

function detenerTemporizador() {
  clearInterval(temporizadorInterval);
}

function reiniciarTemporizador() {
  detenerTemporizador();
  tiempoTotal = 0;
  tiempoRestante = 0;
  mostrarTiempo();
}

function pausarTemporizador() {
  detenerTemporizador();
}

function actualizarTemporizador() {
  if (tiempoRestante > 0) {
    tiempoRestante--;
    mostrarTiempo();
  } else {
    detenerTemporizador();
    alert('¡Tiempo terminado!');
  }
}
function mostrarTiempo() {
  const horas = Math.floor(tiempoRestante / 3600);
  const minutos = Math.floor((tiempoRestante % 3600) / 60);
  const segundos = tiempoRestante % 60;

  const tiempoFormateado = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
  
  document.getElementById('temporizador').textContent = tiempoFormateado;
}