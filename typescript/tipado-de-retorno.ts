const sumar = (a:number, b:number):number=> a + b;

const nombre= ():string=>'Hola Alex';

const obtenerSalario = ():Promise <String>=>{
    return new Promise((resolve, reject)=>{
        resolve('Alejandro');
    });

    obtenerSalario().then(a=> console.log(a.toUpperCase));
}