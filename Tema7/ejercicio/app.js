//Crear una funcion que recibe un numero de segundos y lo transforma a String MM:SS
function devolverTiempo(s){
    const min = Math.floor(s/60);
    const seg = s%60;
    return `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`
}

function guardarPuntos(){
    localStorage.setItem("participantes", JSON.stringify(copiaParticipantes));
}
function pintarPuntos(){
    for(let i = 0; i < puntuacionTarjeta.length; i++){
        puntuacionTarjeta[i].textContent = `Puntos: ${copiaParticipantes[i].puntos}`;
    }
}

//DATOS DEL EJERCICIO
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
//Esta variable guarda una copia del objeto 
let copiaParticipantes = JSON.parse(JSON.stringify(datosIniciales.participantes));

const guardados = localStorage.getItem("participantes");
if(guardados !== null){
    copiaParticipantes = JSON.parse(guardados);
}

//Imprimir los nombres el pais y la puntuación  de los participantes
for(let i = 0;i < nombresTarjeta.length; i++){
    nombresTarjeta[i].textContent = copiaParticipantes[i].nombre;
    paisTarjeta[i].textContent = copiaParticipantes[i].pais;
}
pintarPuntos();

//CAPTURAMOS LOS BOTONES DE VOTO
const botonesVotar = document.querySelectorAll(".boton-votar");

//DESACTIVAMOS TODOS LOS BOTONES DE VOTO POR DEFECTO
botonesVotar.forEach(b=>{
    b.disabled = true;
})

//SI ESTAN ACTIVOS POR CADA BOTON AÑADIMOS UN EVENTO QUE SUME 50ptos A CADA JUGADOR
botonesVotar.forEach((b,i)=>{
    b.addEventListener("click", ()=>{
        copiaParticipantes[i].puntos += 50;
        guardarPuntos();
        pintarPuntos();
    });
});

const btnInicio = document.querySelector("#btn-iniciar");
const btnRestet = document.querySelector("#btn-resetear");
const cronometro = document.querySelector("#cronometro");
let segundosTotales = datosIniciales.duracionSegundos;
let intervalo=null;

cronometro.textContent = devolverTiempo(segundosTotales);

btnInicio.addEventListener("click", ()=>{
    intervalo = setInterval(()=>{
        segundosTotales--;
        cronometro.textContent = devolverTiempo(segundosTotales);

        if(segundosTotales === 0){
            clearInterval(intervalo);
            cronometro.textContent = "¡Votación cerrada!";
            botonesVotar.forEach(b=>{
                b.disabled = true;
            })
        }
    }, 1000)
    //Bloqueamos el boton de la cuenta atrás
    btnInicio.disabled  = true;
    //Desbloqueamos los botones de votar
    botonesVotar.forEach(b=>{
        b.disabled = false;
    })
});

btnRestet.addEventListener("click", ()=>{
    clearInterval(intervalo);
    segundosTotales = datosIniciales.duracionSegundos;
    cronometro.textContent = devolverTiempo(segundosTotales);
    btnInicio.disabled = false;
    botonesVotar.forEach(b=>{
        b.disabled =true;
    });
    copiaParticipantes = JSON.parse(JSON.stringify(datosIniciales.participantes));
    guardarPuntos();
    pintarPuntos();
});