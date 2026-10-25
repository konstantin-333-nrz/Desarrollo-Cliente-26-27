//Creamos una variable donde guardaremos las palabras
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
//Ordeno por orden alfabetico y luego le doy la vuelta
palabrasTotales.sort;
palabrasTotales.reverse();
//Transformo el array a un Set para no repetir valores
let palabrasFinales= new Set([...palabrasTotales]);


const area = document.querySelector("#resultado");
//Para cada palabra del set que sera la p del parametro de la función flecha creare un parrafo y le pondre el valor
palabrasFinales.forEach((p)=>{
    let parrafo = document.createElement("p");
    parrafo.textContent = p;
    //Lo paso al documento principal
    area.append(parrafo);
})