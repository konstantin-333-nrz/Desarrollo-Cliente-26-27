const salida3 = document.getElementById('salida3');
let texto3 = 'resultado';
salida3.textContent = texto3;

var mensaje = "Hola";

if(true){
    var mensaje = "Adiós";
    salida3.textContent += "\n"+ mensaje;
}

salida3.textContent += "\n" + mensaje;