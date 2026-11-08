//---------------------------Ejercicio 3 ---------------------------------------
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
        tipo.textContent = p instanceof Ordenador ? "Sobremesa" : "Portátil";
        tarjeta.append(tipo);

        const info = document.createElement("p");
        info.textContent = p.toString();
        tarjeta.append(info);

        const precio = document.createElement("strong");
        precio.textContent = p.precio;
        tarjeta.append(precio);

        const btnAdd = document.createElement("button");
        btnAdd.textContent =  "Añadir";
        tarjeta.append(btnAdd);

        zonaPrincipal.append(tarjeta);

    })

}
