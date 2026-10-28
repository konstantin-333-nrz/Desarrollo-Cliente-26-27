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


btnAñadir.addEventListener("click", ()=>{
    const texto =inputProducto.value.trim();
    if(texto !== ""){
        let elemLista = document.createElement("li");
        elemLista.textContent = texto;
        lista.append(elemLista);
        inputProducto.value = "";
        listaCompra.push(texto);
    }
})

btnEliminar.addEventListener("click", ()=>{
    listaCompra.pop();

})

