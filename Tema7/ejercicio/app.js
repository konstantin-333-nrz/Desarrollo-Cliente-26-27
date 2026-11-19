//Funcion para ir restando el numero de segundos
function restarSegundos (tiempo){
    let minutos = Number(tiempo.substring(0,2));
    let segundos = Number(tiempo.substring(3));

    if(segundos !== 0){
        segundos -= 1;
    }else{
        minutos -= 1
        segundos = 59
    }
    texto =  `${minutos}:${segundos}`;
    return texto
}

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
//
botonesVotar.forEach((b,i)=>{
    b.addEventListener("click", ()=>{
        datosIniciales.participantes[i].puntos += 50;
        puntuacionTarjeta[i].textContent = `Puntos: ${datosIniciales.participantes[i].puntos}`;
    });
});

const btnInicio = document.querySelector("#btn-iniciar");
const cronometro = document.querySelector("#cronometro");

btnInicio.addEventListener("click", ()=>{
    cronometro.textContent = "02:59";
    
});
