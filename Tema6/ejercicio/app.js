//Guardamos en constantes los elementos del HTML que vamos a usar varias veces
const contenedorCatalogo = document.querySelector("#contenedorPrincipal");
const listaCarrito = document.querySelector("#listaCarrito");
const filtro = document.querySelector("#filtro");
const btnOrdenar = document.querySelector("#btnOrdenar");
const btnVaciar = document.querySelector("#btnVaciar");
const btnExportar = document.querySelector("#btnExportar");

//Creamos el carrito una sola vez para que lo compartan todas las funciones
const carrito = new Carrito();

//Esta variable recuerda si el usuario ha pulsado "Ordenar por precio"
//Así el orden se mantiene aunque después cambie el filtro
let ordenado = false;


//--------------------------- Apartado 3: el catálogo --------------------------
//Creamos el array con seis productos mezclando sobremesas y portátiles
//En unos indicamos todos los valores y en otros se aplican los de por defecto
let catalogo = [];
catalogo.push(new Portatil("HP", "Victus-16", 1200, 24, 1024, 15.6));
catalogo.push(new Ordenador("MSI", "g64522-f", 1700, 16, 2048, 24));
catalogo.push(new Ordenador("NZXT", "B203-h", 3500, 32, 3096, 27));
catalogo.push(new Portatil("ASUS", "Notebook", 350));
catalogo.push(new Portatil("MSI", "Cyborg 16", 1331));
catalogo.push(new Ordenador("Acer", "B3-NK1", 400));

//Recibe un array de productos y pinta una tarjeta por cada uno
//Recibe el array por parámetro para poder pintar también el catálogo filtrado u ordenado
function pintarCatalogo(productos){
    //Vaciamos el contenedor para que las tarjetas no se acumulen al repintar
    contenedorCatalogo.innerHTML = "";

    //(Apartado 7.3) Buscamos el producto más barato de todo el catálogo para comparar con él
    //Usamos el catálogo completo y no la lista recibida para que la comparación no cambie con el filtro
    const masBarato = catalogo.reduce((min, p) => p.precio < min.precio ? p : min);

    productos.forEach(p => {
        //Comprobamos con instanceof si es un portátil (un portátil también es un Ordenador,
        //así que hay que preguntar por Portatil y no por Ordenador)
        const esPortatil = p instanceof Portatil;

        const tarjeta = document.createElement("article");

        //Marca y modelo
        const titulo = document.createElement("h3");
        titulo.textContent = `${p.marca} - ${p.modelo}`;
        tarjeta.append(titulo);

        //Tipo del producto, con una clase para poder darle color en el CSS
        const tipo = document.createElement("span");
        tipo.textContent = esPortatil ? "Portátil" : "Sobremesa";
        tipo.className = esPortatil ? "portatil" : "sobremesa";
        tarjeta.append(tipo);

        //Detalles del producto, sacados del método toString()
        const info = document.createElement("p");
        info.textContent = p.toString();
        tarjeta.append(info);

        //Precio
        const precio = document.createElement("strong");
        precio.textContent = p.precio + " €";
        tarjeta.append(precio);

        //Botón Añadir: registramos su evento en el momento de crearlo
        //Así la flecha recuerda qué producto es el de esta tarjeta
        const btnAdd = document.createElement("button");
        btnAdd.textContent = "Añadir";
        btnAdd.addEventListener("click", () => {
            carrito.agregar(p);
            pintarCarrito();
        });
        tarjeta.append(btnAdd);

        //(Apartado 7.3) Texto que compara este producto con el más barato usando comparar()
        const comparacion = document.createElement("small");
        comparacion.textContent = p === masBarato
            ? "El más barato del catálogo"
            : `${p.comparar(masBarato)} que el más barato`;
        tarjeta.append(comparacion);

        contenedorCatalogo.append(tarjeta);
    });
}


//--------------------------- Apartado 4: el carrito ---------------------------
//Vuelve a pintar la lista del carrito, el total y los contadores
function pintarCarrito(){
    //Vaciamos la lista antes de pintarla de nuevo
    listaCarrito.innerHTML = "";

    //getProductos() nos devuelve una copia del array del carrito
    const productos = carrito.getProductos();

    //(Apartado 7.2) Guardamos los productos que ya hemos pintado para no repetir su línea
    const yaPintados = [];

    productos.forEach((p, i) => {
        //Si este producto ya tiene su línea, nos lo saltamos
        if(yaPintados.includes(p)){
            return;
        }
        yaPintados.push(p);

        //(Apartado 7.2) Contamos cuántas veces está este producto en el carrito
        const veces = productos.filter(x => x === p).length;

        //Mostramos "×2", "×3"... solo cuando hay más de una unidad y multiplicamos el precio
        const li = document.createElement("li");
        li.textContent = `${p.marca} ${p.modelo}${veces > 1 ? " ×" + veces : ""} - ${p.precio * veces} € `;

        //Botón Quitar: quita una unidad usando la posición del producto en el carrito
        const btnQuitar = document.createElement("button");
        btnQuitar.textContent = "Quitar";
        btnQuitar.addEventListener("click", () => {
            carrito.quitar(i);
            pintarCarrito();
        });

        li.append(btnQuitar);
        listaCarrito.append(li);
    });

    //El total suma todos los productos del array, así que ya cuenta bien los repetidos
    document.querySelector("#total").textContent = carrito.getTotal() + " €";
    document.querySelector("#cantidadCarrito").textContent = carrito.getCantidad() + " productos";

    //Mostramos el número de productos también en la cabecera de la página
    document.querySelector("#contadorCabecera").textContent = `Carrito (${carrito.getCantidad()})`;
}

//Botón Vaciar carrito
btnVaciar.addEventListener("click", () => {
    carrito.vaciar();
    pintarCarrito();
});


//--------------------------- Apartado 5: filtrar y ordenar --------------------
//Decide qué productos se pintan según el filtro elegido y si hay que ordenar
function actualizarCatalogo(){
    const valor = filtro.value;

    //Hacemos una copia del catálogo para no modificar el array original
    let lista = [...catalogo];

    //Filtramos por tipo con filter e instanceof
    //Para "todos" no hacemos nada y la lista se queda con todos los productos
    if(valor === "portatil"){
        lista = lista.filter(p => p instanceof Portatil);
    }else if(valor === "sobremesa"){
        //Sobremesa es todo lo que no es un portátil
        lista = lista.filter(p => !(p instanceof Portatil));
    }

    //Ordenamos de menor a mayor precio solo si se ha pulsado el botón
    if(ordenado){
        lista.sort((a, b) => a.precio - b.precio);
    }

    pintarCatalogo(lista);
}

//Al cambiar el select repintamos el catálogo
//Pasamos la función sin paréntesis para que se ejecute cuando cambie el select y no al cargar la página
filtro.addEventListener("change", actualizarCatalogo);

//Al pulsar el botón marcamos que hay que ordenar y repintamos respetando el filtro
btnOrdenar.addEventListener("click", () => {
    ordenado = true;
    actualizarCatalogo();
});


//--------------------------- Apartado 6: dar de alta productos ----------------
const tipoForm = document.querySelector("#tipo");
const campoAutonomia = document.querySelector("#autonomia");
const formulario = document.querySelector("#formProducto");
const mensaje = document.querySelector("#mensajeForm");

//La autonomía solo tiene sentido en los portátiles
//Así que el campo se desactiva siempre que el tipo elegido no sea portátil
tipoForm.addEventListener("change", () => {
    campoAutonomia.disabled = tipoForm.value !== "portatil";
});

//Un campo vacío devuelve "" y los valores por defecto solo se aplican con undefined
//Por eso convertimos el campo vacío en undefined antes de pasarlo al constructor
function numeroOUndefined(campo){
    return campo.value === "" ? undefined : Number(campo.value);
}

formulario.addEventListener("submit", (e) => {
    //Evitamos que el formulario recargue la página al enviarse
    e.preventDefault();

    //Leemos los campos obligatorios (quitamos los espacios de los textos con trim)
    const marca = document.querySelector("#marca").value.trim();
    const modelo = document.querySelector("#modelo").value.trim();
    const precio = document.querySelector("#precio").value;

    //Si falta la marca, el modelo o el precio mostramos el error y no añadimos nada
    if(!marca || !modelo || !precio){
        mensaje.textContent = "Rellena marca, modelo y precio.";
        return;
    }

    //Leemos los campos opcionales
    const ram = numeroOUndefined(document.querySelector("#ram"));
    const disco = numeroOUndefined(document.querySelector("#disco"));
    const pulgadas = numeroOUndefined(document.querySelector("#pulgadas"));

    //Creamos un Portatil o un Ordenador según el tipo elegido
    let nuevo;
    if(tipoForm.value === "portatil"){
        const autonomia = numeroOUndefined(campoAutonomia);
        nuevo = new Portatil(marca, modelo, Number(precio), ram, disco, pulgadas, autonomia);
    }else{
        nuevo = new Ordenador(marca, modelo, Number(precio), ram, disco, pulgadas);
    }

    //Lo añadimos al catálogo y lo volvemos a pintar respetando el filtro y el orden
    catalogo.push(nuevo);
    actualizarCatalogo();

    //Limpiamos el mensaje y el formulario
    //El reset vuelve el tipo a sobremesa, así que desactivamos otra vez la autonomía
    mensaje.textContent = "";
    formulario.reset();
    campoAutonomia.disabled = true;
});


//--------------------------- Apartado 7: mejoras ------------------------------
//(7.1) Exportar el catálogo en formato JSON dentro del <pre>
btnExportar.addEventListener("click", () => {
    document.querySelector("#exportacion").textContent = JSON.stringify(catalogo, null, 2);
});

//(7.2) Está dentro de pintarCarrito(): agrupa los productos repetidos con "×2", "×3"...
//(7.3) Está dentro de pintarCatalogo(): compara cada producto con el más barato


//--------------------------- Arranque de la página ----------------------------
//Pintamos el carrito vacío y el catálogo la primera vez que se carga la página
pintarCarrito();
actualizarCatalogo();
