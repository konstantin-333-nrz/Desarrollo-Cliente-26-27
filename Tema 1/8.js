const salida8 = document.getElementById('salida8');
let texto8 = 'resultado\n';
salida8.textContent = texto8;

const N8 = 20 ;

for(let i = 0; i < N8; i++){
    let linea = "";

    for(let j=0;j<N8-1-i;j++){
        linea += " ";
    }

    linea += "*";
    salida8.textContent += linea + "\n";
}