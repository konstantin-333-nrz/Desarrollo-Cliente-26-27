const datosIniciales = {
    nombre: "Copa Pixel 2026",
    duracionSegundos: 180,
    participantes: [
        { nombre: "Ryu Master", puntos: 2400, pais: "JP" },
        { nombre: "LuciaFire", puntos: 3100, pais: "ES" },
        { nombre: "DragonKick99", puntos: 1850, pais: "MX" },
        { nombre: "ZeroCool", puntos: 2950, pais: "US" },
    ],
};
//Guardamos las diferentes constantes de los contenedores
const nombresTarjeta = document.querySelectorAll(".nombre");
const paisTarjeta = document.querySelectorAll(".pais");
const puntuacionTarjeta = document.querySelectorAll(".etiqueta-puntos");

//Imprimir los nombres el pais y la puntuación  de los participantes
for(let i = 0;i < nombresTarjeta.length; i++){
    nombresTarjeta[i].textContent = datosIniciales.participantes[i].nombre;
    paisTarjeta[i].textContent = datosIniciales.participantes[i].pais;
    puntuacionTarjeta[i].textContent = `Puntos: ${datosIniciales.participantes[i].puntos}`;
}

const botonesVotar = document.querySelectorAll(".boton-votar");

botonesVotar.forEach((b,i)=>{
    b.addEventListener("click", ()=>{
        datosIniciales.participantes[i].puntos += 50;
        puntuacionTarjeta[i].textContent = `Puntos: ${datosIniciales.participantes[i].puntos}`;
    });
});

//FUNCIONAMIENTO DEL CONTADOR
const cronometro = document.querySelector("#cronometro");
const estado = document.querySelector("#estado");
const aviso = document.querySelector("#aviso");
const btnIniciar = document.querySelector("btn-iniciar");

let tiempoRestante = datosIniciales.duracionSegundos;
let intervalo = null;

