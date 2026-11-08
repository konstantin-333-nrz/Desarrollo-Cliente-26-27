//---------------------------Ejercicio 3 ---------------------------------------
const carrito = new Carrito();
let ordenado = false;
//Creamos un array que se llama
let catalogo = [];
catalogo.push(new Portatil("HP", "Victus-16", 1200, 24, 1024, 15.6));
catalogo.push(new Ordenador("MSI", "g64522-f", 1700, 16, 2048,24));
catalogo.push(new Ordenador("NZXT", "B203-h", 3500, 32, 3096, 27 ));
catalogo.push(new Portatil("ASUS","Notebook", 350));
catalogo.push(new Portatil("MSI", "Cyborg 16",1331));
catalogo.push(new Ordenador("Acer","B3-NK1",400));

function pintarCatalogo(productos){
    const zonaPrincipal = document.querySelector("#contenedorPrincipal");
    zonaPrincipal.innerHTML="";

    productos.forEach(p => {
        const tarjeta = document.createElement("article");

        const titulo = document.createElement("h3");
        titulo.textContent = `${p.marca} - ${p.modelo}`
        tarjeta.append(titulo);

        const tipo = document.createElement("span");
        tipo.textContent = p instanceof Portatil ? "Portátil" : "Sobremesa";
        tarjeta.append(tipo);

        const info = document.createElement("p");
        info.textContent = p.toString();
        tarjeta.append(info);

        const precio = document.createElement("strong");
        precio.textContent = p.precio + " €";
        tarjeta.append(precio);

        const btnAdd = document.createElement("button");
        btnAdd.textContent =  "Añadir";
        tarjeta.append(btnAdd);

        zonaPrincipal.append(tarjeta);

        btnAdd.addEventListener("click", ()=>{
            carrito.agregar(p);
            pintarCarrito();
        });

        tipo.className = p instanceof Portatil ? "portatil" : "sobremesa";

    });
}

function pintarCarrito(){
    const lista = document.querySelector("#listaCarrito");
    lista.innerHTML = "";

    carrito.getProductos().forEach((p,i)=>{
        const li = document.createElement("li");
        li.textContent = `${p.marca} ${p.modelo} - ${p.precio} € `;

        const btnQuitar = document.createElement("button");
        btnQuitar.textContent = "Quitar";
        btnQuitar.addEventListener("click", ()=>{
            carrito.quitar(i);
            pintarCarrito();
        });
        li.append(btnQuitar);
        lista.append(li);
    });

    const total = document.querySelector("#total");
    total.textContent = carrito.getTotal() + " €";
    const cant = document.querySelector("#cantidadCarrito");
    cant.textContent = carrito.getCantidad() + " productos";
    const contador = document.querySelector("#contadorCabecera");
    contador.textContent = `Carrito (${carrito.getCantidad()})`;
}
const botonVaciar = document.querySelector("#btnVaciar");

botonVaciar.addEventListener("click", ()=>{
    carrito.vaciar();
    pintarCarrito();
});

function actualizarCatalogo(){
    
    const valor = document.querySelector("#filtro").value;
    let lista = [...catalogo];

    if(valor === "portatil"){
        lista = lista.filter(p => p  instanceof Portatil);
    }else if (valor === "sobremesa") {
        lista = lista.filter(p=> !(p instanceof Portatil));
    }

    if(ordenado){
        lista.sort((a,b) => a.precio - b.precio);
    }

    pintarCatalogo(lista);
    
}
const filtro = document.querySelector("#filtro");
filtro.addEventListener("change", actualizarCatalogo);
const btnOrdenar = document.querySelector("#btnOrdenar");
btnOrdenar.addEventListener("click", ()=>{
    ordenado = true;
    actualizarCatalogo();
});

pintarCatalogo(catalogo);
actualizarCatalogo();

