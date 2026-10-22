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

log.innerHTML = 'Hay <b>${totalPrecios}</b> precios listado';
