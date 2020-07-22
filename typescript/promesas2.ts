
const retitrarDinero = (montoRetirar: number):Promise<number>=>{
    let dineroActual = 1000;
    
    return new Promise((resolve, reject)=>{
    
        if ( montoRetirar >= dineroActual){
            reject('No hay fondos suficientes');
        }else{
            dineroActual-=montoRetirar;
            resolve(dineroActual);
        }
    });

}

retitrarDinero(1500)
    .then(montoActual=> console.log(`Me queda ${montoActual}`))
    .catch(err => console.warn(err));


