
const avenger= {
    nombre: 'Steve',
    clave :'Capitán América',
    poder: 'Droga'

}

/*const {nombre,clave,poder}= avenger;

console.log(nombre);
console.log(clave);
console.log(poder);
*/

//Con Interfaces
const extraer = ({nombre, clave, poder}:any)=>{

    //const {nombre,clave,poder}= avenger;

    console.log(nombre);
    console.log(clave);
    console.log(poder); 
}
//extraer(avenger);

const avengers: String[]=['Thor','Ironman','Spiderman'];

const [ , ,araña ]= avengers;

//console.log(loki);
//console.log(hombre);

//console.log(araña);

const extraerArr = ([thor,ironman,spiderman]:String[])=>{

    //const {nombre,clave,poder}= avenger;
    console.log(thor);
    console.log(ironman);
    console.log(spiderman); 
}
extraerArr(avengers);
