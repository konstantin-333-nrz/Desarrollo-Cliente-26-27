const salida5 = document.getElementById('salida5');
let texto5 = 'resultado';
salida5.textContent = texto5;

let suma = 0;

for(let i = 1; i < 50 ; i++){
    if(i%4==0){
        suma += i;
    }
}

salida5.textContent = "La suma total de los números multiplos de 4 entre el 1 y 50 es = " + suma;