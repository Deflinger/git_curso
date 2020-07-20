function getedad(){
    return 100 + 100 + 300;
}
const nombre = 'Alejandro';
const apellido = "Virgen";
const edad = 27;



const salida = nombre +" "+ apellido +" (Edad: "+ edad+" )";
const salida2 = `${nombre} 
${apellido} 
(edad: ${getedad()} )`;

console.log (salida);
console.log(salida2);

