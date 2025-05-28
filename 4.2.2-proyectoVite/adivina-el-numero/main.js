import './style.css';

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');
const intentos = document.getElementById('intentos');
const historial = document.getElementById('historial');

let contadorIntentos = 0;
let numerosIngresados = [];

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        return;
    }

    contadorIntentos++;
    numerosIngresados.push(numeroJugador);

    if (numeroJugador === numeroSecreto) {
        mensaje.textContent = `¡Felicidades! ¡Adivinaste el número en ${contadorIntentos} intentos!`;
        botonAdivinar.disabled = true; 
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = 'El número es más alto.';
    } else {
        mensaje.textContent = 'El número es más bajo.';
    }

    intentos.textContent = `Intentos: ${contadorIntentos}`;
    historial.textContent = `Números ingresados: ${numerosIngresados.join(', ')}`;
});
