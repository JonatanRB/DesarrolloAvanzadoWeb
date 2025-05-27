document.getElementById('registroEvento').addEventListener('submit', function(event){
    event.preventDefault();

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const telefono = document.getElementById('telefono');
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    if (!nombre || !correo || !telefono || intereses.length === 0 || !hora) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }else{
        alert('Registro exitoso. ¡Gracias por registrarte!');
    }

});


