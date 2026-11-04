class Ordenador {
    constructor(marca,modelo ,precio,ram = 4,disco=512,pulgadas=17){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = this.setPrecio(precio);
        this.ram = this.setRam(ram);
        this.disco = this.setDisco(disco);
        this.pulgadas = this.setPulgadas(pulgadas);
    }
    setPrecio(precio){
        if(precio<0){
            precio = 0;
        }
        return precio;
    }

    setRam(ram){
        if(ram <= 0){
            ram = 4;
        }
        return ram;
    }

    setDisco(disc){
        if(disc <= 0){
            disc = 512;
        }
        return disc;
    }

    setPulgadas(p){
        if(p <= 0){
            p = 17;
        }
        return p;
    }

}