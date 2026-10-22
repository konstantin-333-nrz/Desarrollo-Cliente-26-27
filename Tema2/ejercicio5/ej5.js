/*
Ejercicio 5.1: En #productos, cuenta cuántos <span class="precio"> hay
y escribe en #log: “Hay X precios listados”.
*/
//Primero capturamos lo que nos hace falta log y lista
const log = document.querySelector('#log');
const lista = document.querySelector('#lista');
//Capturamos todos los productos de la lista mediante el nombre de la etiqueta HTML
let productos = lista.getElementsByTagName("li");
//Capturamos solo lo que son los span de precio con querySelectorAll
let preciosListados = lista.querySelectorAll('.precio');
//Obtenemos la cantidad de los precios listados
let totalPrecios = preciosListados.length;
//En la zona del log insertamos codigo HTML con innerHTML para que se vea la cantidad de precios
log.innerHTML += "Hay <b>" + totalPrecios + "</b> precios listados </br>";
//------------------------------------------------------------------------------
/**
 *  Ejercicio 5.2: Del <li id="p1">, muestra en #log su innerHTML y su textContent
 *  en dos líneas. ¿Son iguales?
 */
//Capturamos el elemento li con el id p1 como sugiere el enunciado
let producto1 = lista.querySelector("#p1");
//en el Log mediante innerHTML introducimos el inner HTML de producto1
// En este caso el precio se ve en negrita ya que coge las etiquetas del propio HTML
log.innerHTML += producto1.innerHTML + "</br>";
//Ahora lo mismo esta vez introduciendo el contenido del texto al solo introducir eso,
//unicamente se visualizara el texto sin las etiquetas es decir la negrita se suprime
log.innerHTML += producto1.textContent;
//------------------------------------------------------------------------------
/*
* Ejercicio 5.3: Cambia el contenido de #n2 por:
* “Reposición completada. ¡Gracias por vuestra paciencia!”
*/
//Capturamos el elemento n2
let n2 = document.querySelector("#n2");
//Mediante text content vamos a cambiar el contenido del texto.
n2.textContent = "Reposición completada. ¡Gracias por vuestra paciencia!";
//------------------------------------------------------------------------------
/**
 * Ejercicio 5.4: Recorre los <span class="precio"> y suma 0.10 a cada valor mostrado.
 */
//como ya tenemos la variable que guarda los precios vamos a recuperarla (preciosListados)
//Mediante un bucle for recorremos cada precio
for(let i = 0; i<preciosListados.length;i++){
    //conseguimos el precio y lo pasamos a tipo float para poder operar con el
    let precio = parseFloat(preciosListados[i].textContent);
    //le sumamos a cada precio 0.10
    let precioFinal = precio + 0.10;
    //Al text content lo cambiamos por el precioFinal
    preciosListados[i].textContent = precioFinal;
}
//------------------------------------------------------------------------------
/**
 * Ejercicio 5.5: Añade al final de la lista un elemento con texto: Tila y precio 2.20€.
 */
//Reusaremos la constante lista para introducir el nuevo producto
lista.innerHTML += '<li id="p4">Tila <span class="precio">2.20</span> €</li>';
//------------------------------------------------------------------------------
/**
 *  Ejercicio 5.6: Sustituye el primer elemento de #lista por otro con texto:
 *  Producto destacado <span class="precio">9.99</span> €.
 */
//Accedemos a los productos que teniamos guardados previamente y el elemento de la posicion 0
//Insertamos en su HTML el nuevo producto
productos[0].innerHTML = 'Producto destacado <span class="precio">9.99</span>';
//------------------------------------------------------------------------------
/**
 * Ejercicio 5.7: Borra el párrafo con id n2.
 */
//Al ya tener la variable que guarda n2 simplemente con la función remove lo eliminariamos
n2.remove();
//------------------------------------------------------------------------------
/**
 * Ejercicio 5.8: Marca todos los inputs cuyo name sea alumnos.
 */
//Capturamos los inputs de name alumnos
let seccionAlumnos = document.querySelector("#alumnos");
let alumnos = seccionAlumnos.getElementsByTagName("input");
//Recorremos los alumnos y hacemos que el atributo checked se quede en true
for(let i = 0; i < alumnos.length; i++){
    //Si ese input su name es alumno y es de tipo checkbox se marcara
    if(alumnos[i].name == "alumnos" && alumnos[i].type == "checkbox"){
        alumnos[i].checked = true;
    }
}
//------------------------------------------------------------------------------
/**
 * Ejercicio 5.9: Escribe en #log el número total de elementos en 
 * #lista sin que se elimine el texto anterior de #log.
 */
//Creamos el parrafo que vamos a añadir
let parrafo = document.createElement("p");
//Al textContent del parrafo le metemos lo que necesitamos
parrafo.textContent = "El total de elementos en la lista de productos es : " + productos.length;
//Con la funcion de append añadimos el parrafo a el log que teniamos capturado anteriormente.
log.append(parrafo);
//------------------------------------------------------------------------------
