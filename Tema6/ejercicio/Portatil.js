//Creamos una clase Portatil que extiende de Ordenador en su defecto añadiremos el atributo de autonomía
class Portatil extends Ordenador{
    constructor(mc,mod,pr,ram=4,di=256,p=12,autonomia = 4){
        //llamamos a la clase padre con el uso de super
        super(mc,mod,pr,ram,di,p);
        this.autonomia = autonomia;
    }

    toString(){
        return `${super.toString} . ${this.autonomia}h de autonomía"`;
    }
}