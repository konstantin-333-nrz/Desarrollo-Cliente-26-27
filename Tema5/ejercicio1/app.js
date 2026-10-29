let listaCompra = ["leche","pan","huevos"];
//Apartado 1 Mostrar la lista de a compra como un li dentro de la lista
const lista = document.querySelector("#lista");
//Aqui para cada producto de la lista de la compra crearemos un elemento li y lo llevaremos a la lista principal
listaCompra.forEach(product =>{
    let elemLista = document.createElement("li");
    elemLista.textContent = product;
    lista.append(elemLista);
})
//Apartado 2 Añadir e eliminar productos(Hacer que los botones funcionen)
const btnEliminar = document.querySelector("#btn-eliminar");
const btnAñadir = document.querySelector("#btn-agregar");
const inputProducto = document.querySelector("#input-producto");

//Creamos un evento para el boton de añadir
btnAñadir.addEventListener("click", ()=>{
    //el texto que este en el input lo vamos a guardar y eliminar los posibles espacios alante y atrás
    const texto =inputProducto.value.trim();
    if(texto !== ""){
        //Si el texto no esta vacío creamos el elemento li y le ponemos el contenido del input
        let elemLista = document.createElement("li");
        elemLista.textContent = texto;
        //a la lista principal le añadimos el elemento que hemos creado
        lista.append(elemLista);
        inputProducto.value = "";
        //Y a su vez lo añadimos al final del array
        listaCompra.push(texto);
    }
})

//Creamos el evento para el boton de eliminar
btnEliminar.addEventListener("click", ()=>{
    if(listaCompra.length > 0){
        //Eliminamos el ultimo elemento del array
        listaCompra.pop();
        //y tambien eliminamos el ultimo elemento de la lista html que la hemos capturado con anterioridad
        lista.lastElementChild.remove();
    }
});


