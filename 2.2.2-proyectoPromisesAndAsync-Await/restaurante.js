const mesasDisponibles = 10;

function verificarDisponibilidad(mesasSolicidatas){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(mesasSolicidatas <= mesasDisponibles){
                resolve("Reservación exitosa.");
            }else{
                reject("En este momento no existen mesas disponibles.");
            }
        }, 2000);
    });
}

function enviarConformacion(nombreCliente){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.floor(Math.random(1) * 2) === 1){
                resolve(`Correo enviado a ${nombreCliente}.`)
            }else{
                reject("Correo perdido en el camino.")
            }
        }, 1500);
    });
}

async function hacerReserva(nombreCliente, mesasSolicitadas){
    try{
        console.log("Verificando disponibilidad de mesas...");
        const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
        console.log(disponibilidad);
        
        try{
            const confirmacion = await enviarConformacion(nombreCliente);
            console.log(confirmacion);
        }catch(errorCorreo){
            console.log("Error al enviar correo:", errorCorreo);
        }

    }catch(error){
        console.log("Error:", error);
    }
}

hacerReserva("Juan Pérez", 3);
hacerReserva("Pedro Paramo",11);