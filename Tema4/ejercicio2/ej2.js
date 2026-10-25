//Creamos una funcion que va a recibir un array por parametros
function cuentaPalabras(palabras){
    let palabrasTotalesMap = new Map();

    palabras.forEach(palabra => {
        //Si en el map que hemos creado esta la palabra: se le sumara al valor asociado a la clave 1
        if(palabrasTotalesMap.has(palabra)){
            palabrasTotalesMap.set(palabra, palabrasTotalesMap.get(palabra) + 1);
        }else{
            //SiNo se añadira la clave de la palabra que haya reconocido y un valor de 1 inicial
            palabrasTotalesMap.set(palabra , 1);
        }
    });

    return palabrasTotalesMap;
}
//Programa principal
let palabrasTotales = new Array();
//creamos la variable donde guardaremos la palabra a guardar
let palabra = "";
do{
    //Vamos a solicitar que el usuario introduzca una palabra
    palabra = prompt("Introduce una palabra: ");
    if (palabra){//igual se puede evaluar como un booleano
        palabrasTotales.push(palabra)
    };
    //Mientras que haya palabra recordemos que todo lo que no sea null, 0 ... devuelve true
}while(palabra);

//Devolvemos en una variable el map que devuelve la función
let palabrasAMostrar = cuentaPalabras(palabrasTotales);
const area = document.querySelector("#resultado");
//Para cada palabra a mostrar nos creamos un parrafo con la palabra y la cantidad de veces repetida
palabrasAMostrar.forEach((cant,palabra)=>{
    let parrafo = document.createElement("p");
    parrafo.textContent = palabra  + " esta almacenada un total de " + cant + " veces";
    //Lo añadimos al section del main
    area.append(parrafo);
})

