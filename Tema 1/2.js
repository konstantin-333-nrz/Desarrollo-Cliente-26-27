const salida2 = document.getElementById('salida2');
let texto2 = 'resultado';
salida2.textContent = texto2;

let contador = 0;
for(let i = 0 ; i < 5;i++){
    contador++;
}

salida2.textContent = "\nResultado Final : " + contador;