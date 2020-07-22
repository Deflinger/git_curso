/*
class Avenger{
nombre: String;
equipo:String;
nombreReal:String;

puedePelear:boolean;
peleasGanada:number;
constructor(nombre:string, equipo:String, nombreReal:String){
    this.nombre=nombre;
    this.equipo=equipo;
    this.nombreReal=nombreReal;

}


}
const antman:Avenger=new Avenger('Antman','Capi','Scott');
console.log(antman);
*/

class Avenger{
    //nombre: String;
    //equipo:String;
    //nombreReal:String;
    
    //puedePelear:boolean;
    //peleasGanada:number;

        constructor(public nombre:string,
                    public equipo:String,
                    public nombreReal?:String,
                    public puedePelear:boolean=true,
                    public peleasGanada:number=0){}
    
    
    }
    const antman:Avenger=new Avenger('Antman','Capi');
    console.log(antman);
