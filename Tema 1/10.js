const salida10 = document.getElementById('salida10');
let texto10 = 'resultado\n';
salida10.textContent = texto10;

const N10 = 20;

for (let i = 0; i < N10; i++) {
  let linea = "";

  for (let j = 0; j <= i; j++) {
    linea += "* ";
  }

  salida10.textContent += linea + "\n";
}