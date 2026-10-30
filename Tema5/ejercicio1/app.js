//Esta funcion servira para actualizar el contador cada vez que se haga una modificación
//Y al estar en la funcion de pintar la lista será mas comodo
function actualizarContador(){
    const n = listaCompra.length;
    contador.textContent = `${n} producto/s en la lista`;
}

//A la función de pintarLista le he pedido ayuda a la ia ya que tenia una estructura muy desorganizada y era imposible
//hacer el apartado 5... 
//Apartado 1 Mostrar la lista de la compra como un li dentro de la lista
function pintarLista(){
    //el texto del buscador, en minúsculas para comparar sin errores
    const texto = buscador.value.toLowerCase();
    //Vaciamos la lista para no duplicar elementos
    lista.innerHTML="";

    //Recorremos el array e i tiene la posicion numerica
    listaCompra.forEach((prod,i) =>{
        //pintamos los que tienen el texto en el contador
        if(prod.toLowerCase().indexOf(texto) === 0){
            let elemLista = document.createElement("li");
            elemLista.textContent = prod;
        
            //Si se hace click en el producto se elimina del array
            elemLista.addEventListener("click", ()=>{
                listaCompra.splice(i,1);
                pintarLista();
            });
            //Añadimos a la lista el elemento de la lista de no ser clickado
            lista.append(elemLista);
        }
    });
        actualizarContador();
}

//Hacemos una función para que añada el producto ya sea con enter o con el boton
function addProducto(){
    const textoInput = inputProducto.value.trim();
    //Si el texto input ya esta en la lista lanzamos un alert
    const exists = listaCompra.some(p=> p.toLowerCase() === textoInput.toLowerCase());
    if(exists){
        alert(`"${textoInput}" ya está en la lista`)
    }else{
        listaCompra.push(textoInput);
        inputProducto.value ="";
        pintarLista();
    }
    
}


let listaCompra = ["leche", "pan", "huevos"];

//Aqui guardamos los elementos del DOM
const lista = document.querySelector("#lista");
const btnAdd = document.querySelector("#btn-agregar");
const btnEliminar = document.querySelector("#btn-eliminar");
const inputProducto = document.querySelector("#input-producto");
const contador = document.querySelector("#contador");
const buscador = document.querySelector("#buscador");


//Añadir y eliminar productos mediante los botones
//Si se añade con el boton
btnAdd.addEventListener("click", addProducto);

//Si se añade con el enter
inputProducto.addEventListener("keydown", (event) =>{
    if(event.key === "Enter"){
        addProducto();
    }
})
//boton para eliminar
btnEliminar.addEventListener("click", ()=>{
    //Eliminamos el último y pintamos la lista
    listaCompra.pop();
    pintarLista();
});

//Buscador que pinta la lista y ya en esa funcion lee el buscador
buscador.addEventListener("input", pintarLista);

//el primer ejercicio que siempre la pinte cuando se abra
pintarLista();

