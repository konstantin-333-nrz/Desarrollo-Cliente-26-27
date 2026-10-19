const salida7 = document.getElementById('salida7');
let texto7 = 'resultado\n';
salida7.textContent = texto7;

const N7 = 20;

for(let i = 0 ; i < N7; i++){
   let linea = "";

   for(let j = 0; j<i; j++){
    linea += " ";
   }

   linea += "*";
   salida7.textContent += linea + "\n";
}