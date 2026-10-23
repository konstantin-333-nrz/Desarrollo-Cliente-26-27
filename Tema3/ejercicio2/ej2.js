let cantidades = new Array();
//rellenamos el array que acabamos de crear con 0 y a partír de ahi iremos sumando valores
for(let i = 0 ; i<10; i++){cantidades[i]=0};
//Generamos los numeros random del entre 1 y 10
for(let i=0; i < 10000;i++){
    let numAleatorio = Math.floor(Math.random()*10)+1;
    // En el array vamos a sumar uno al numero aleatorio que haya y le resto 1 porque empieza en 0
    cantidades[numAleatorio-1] += 1;
}
//Creamos un contador para que a la hora de imprimir no haga falta poner Numero 1, Numero 2...
let cont = 1;
//Capturamos el área donde colocaremos las frecuencias
const area = document.querySelector("#area");
//Recorremos para capturar los valores finales de las cuentas
for(i = 0; i< cantidades.length; i++){
    let parrafo = document.createElement("p");
    //El texto del parrafo sera ejemplo (Número 1 = X veces)
    parrafo.textContent = "Número " + cont + "=" + cantidades[i] + "veces";
    area.append(parrafo);
    cont++;
}