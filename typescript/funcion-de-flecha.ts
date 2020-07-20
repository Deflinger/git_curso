
    const miFuntion = function(a:String ){
        return a.toUpperCase();
    }
    const miFuntionF = (a:String)=> a.toUpperCase();

    const sumarN = function(a:number, b:number){
        return a+b;
    }

    const sumarF = (a:number,b:number)=> a+b;

    const hulk={
        nombre:"Hulk",
        smash(){
            setTimeout(()=>{
            console.log(`${this.nombre} SMASH!!!`);
            },1000)
        }
    }
    hulk.smash();