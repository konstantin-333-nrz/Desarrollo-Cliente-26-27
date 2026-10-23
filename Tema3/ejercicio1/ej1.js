let coleccionBilletes = new Array();

for(let i = 0 ; i < 50; i++){
    //En cada vuelta vamos a crear un boleto que sera un set
    let primitiva = new Set();
    //Mientras que la longitud de los billetes no sea de seis numeros no para el siguiente bucle
    while(primitiva.size < 6){
        //Recordemos que el set elimina valores duplicados asi que no tendremos problema
        //La longitud se completara cuando los 6 valores sean distintos
        let numAleatorio = (Math.floor(Math.random() * 49) + 1 );
        //Una vez generado el numero aleatorio entre 1 y 49 lo añadiremos al billete
        primitiva.add(numAleatorio);
    }
    //lo transformamos a un array para un trabajo más comodo
    let billeteLoteria = [...primitiva];
    // añadimos ese billete a la colección principal
    coleccionBilletes.push(billeteLoteria);
}
//Capturamos el area donde vamos a colocar los diferentes números de loteria
const area = document.querySelector("#boletos");
//Recorremos el array
for(let i = 0; i< coleccionBilletes.length; i++){
    //Creamos un elemento de tipo p que añadiremos al section
    let parrafo = document.createElement("p");
    parrafo.textContent = coleccionBilletes[i];
    //Añadimos el parrafo al area
    area.append(parrafo);
}