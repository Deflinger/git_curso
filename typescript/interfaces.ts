
interface Xmen{
    nombre: String;
    edad: number;
    poder?: String
}

const enviarMision = (xmen: Xmen )=> {
    console.log(`Enviando a ${xmen.nombre} a la misión`);
}
const regrasarAlCuartel = (xmen: Xmen)=> {
    console.log(`llamando a ${xmen.nombre} desde la misión`);
}

const wolverine:Xmen = {
    nombre:'logan',
    edad:60
}

enviarMision(wolverine);
regrasarAlCuartel(wolverine);