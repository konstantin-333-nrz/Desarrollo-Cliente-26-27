//Creamos la función principal en la que aplicaremos el debido filtro a cada elemento
function filtro(array, callback){
    for(let i = 0;i < array.length;i++){
        array[i]=callback(array[i]);
    }
    return array;
}
//Creamos la función multiplicar * 2 
function multiplicarx2(n){
    return n*2;
}
//Crearemos la función para convertir cada elemento que se le pase en mayuscula
function mayusculas(p){
    return p.toUpperCase();
}

//Función de factorial
function factorial(n){
    let resultado = 1;

    for(let i = 1; i <= n; i++){
        resultado *= i;
    }

    return resultado;
}
//Creamos los diferentes arrays necesarios tanto numeros como palabras
let palabras = ["queso", "jamon", "pizza", "kiwi"];
let numeros = [1,8,2,7];

//Invocamos a la funcion para ver el uso de callback
let arrayMayusculas = filtro(palabras, mayusculas);
let arrayFactoriales = filtro(numeros, factorial);
let arrayPorDos = filtro(numeros, multiplicarx2);

const area = document.querySelector("#resultado");
//Creamos una funcion para mostrar el array y que tenga un titulo
function mostrarArray(array, titulo) {
    let parrafo = document.createElement("p");
    parrafo.textContent = titulo + ": " + array + " , ";
    area.append(parrafo);
}
//Mostramos los diferentes arrays
mostrarArray(arrayMayusculas, "Palabras en mayúsculas");
mostrarArray(arrayFactoriales, "Factoriales");
mostrarArray(arrayPorDos, "Multiplicados por dos");
