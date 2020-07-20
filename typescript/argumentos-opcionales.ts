function activar(quien:String, 
                 momento?:String,
                 objeto:String= 'Bati-señal'){
    
    
    if(momento){
        console.log(`${ quien} activó la ${objeto} en la ${momento}.`);
    } else{
        console.log(`${ quien} activó la ${objeto}`);
    }

}
            


activar("Gordon","tarde");
