//Capuramos ambas capas 
const capa1 = document.querySelector("#capa1");
const capa2 = document.querySelector("#capa2");
//Si comienza a arrastrarse la opacidad es del 50%
capa1.addEventListener("dragstart", ()=>{
    capa1.style.opacity = "0.5";
});
//si se deja de arrastrar la opacidad vuelve a la normalidad 
capa1.addEventListener("dragend", ()=>{
    capa.style.opacity = "1";
});
//Si entra el elemento a la capa 2 el fondo se pone rojo
capa2.addEventListener("dragenter", ()=>{
    capa2.style.background = "red";
});
//Y si sale se vuelve blanco
capa2.addEventListener("dragleave", ()=>{
    capa2.style.background = "white";
});

//para el prevent default tuve que pedir ayuda a la iA ya que no sabia a que  tenia que aplicarlo
capa2.addEventListener("dragover", e=>{
    e.preventDefault();
})

//Evento al soltar la capa 1 en la capa 2
capa2.addEventListener("drop", e=>{
    e.preventDefault();
    capa1.style.display = "none";
    capa2.style.background = "white";
    capa2.textContent = "Lo has logrado";
});
