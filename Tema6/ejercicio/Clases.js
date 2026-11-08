//---------------------------------Ejercicio 1----------------------------------
//Nombre de la clase principal
class Ordenador {
    //Creamos un constructor al cual le vamos a dar 3 valores por defecto en caso de no tenerlos
    constructor(marca,modelo ,precio,ram = 4,disco=512,pulgadas=17){
        this.marca = marca;
        this.modelo = modelo;
        //Llamamos a los métodos setter para asignar el valor después de validar el contenido
        this.precio = this.setPrecio(precio);
        this.ram = this.setRam(ram);
        this.disco = this.setDisco(disco);
        this.pulgadas = this.setPulgadas(pulgadas);
    }
    //Para el precio se valida que no sea menor que 0 si es asi pasara directamente a 0
    setPrecio(precio){
        if(precio<0){
            precio = 0;
        }
        return precio;
    }

    //Colocamos la ram en caso de recibir 0 se pondría el valor por defecto
    setRam(ram){
        if(ram <= 0){
            ram = 4;
        }
        return ram;
    }
    //Si el disco tiene una capacidad de 0 o menos le damos un valor por defecto de 512
    setDisco(disc){
        if(disc <= 0){
            disc = 512;
        }
        return disc;
    }
    //Si el valor de las pulgadas es 0 o menor le aplicamos el valor de 17"
    setPulgadas(p){
        if(p <= 0){
            p = 17;
        }
        return p;
    }

    //Creamos un método toString para devolver los datos de el objeto implicito en forma de String
    toString(){
        return `${this.marca} ${this.modelo} · ${this.ram} GB RAM · ${this.disco} GB · ${this.pulgadas}"`
    }

    //Una funcion que compara los precios del ordenador implicito y el recibido por parámetros
    comparar(pc){
        let result = "";
        //Uso el nombre de la variable directamente porque al no especificar que sea un atributo privado
        //No haria falta el uso de getter

        //Si es una instancia de ordenador compara los precios y el string a devolver toma diferentes valores
        if(pc instanceof Ordenador){
            if(pc.precio > this.precio){
                result = "más barato";
            }else if(pc.precio < this.precio){
                result = "más caro";
            }else{
                result = "mismo precio";
            }
        }else{
            result= "Esto no es valido";
        }

        return result;
    }


}
//--------------------------------Ejercicio 2-----------------------------------
//Creamos una clase Portatil que extiende de Ordenador en su defecto añadiremos el atributo de autonomía
class Portatil extends Ordenador{
    constructor(mc,mod,pr,ram=4,di=256,p=12,autonomia = 4){
        //llamamos a la clase padre con el uso de super
        super(mc,mod,pr,ram,di,p);
        this.autonomia = autonomia;
    }

    toString(){
        return `${super.toString()} · ${this.autonomia}h de autonomía`;
    }
}
