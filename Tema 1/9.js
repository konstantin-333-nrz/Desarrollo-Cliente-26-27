const salida9 = document.getElementById('salida9');
let texto9 = 'resultado\n';
salida9.textContent = texto9;

const N9 = 20;

for (let i = 0; i < N9 - 1; i++) {
  let linea = "";

  for (let j = 0; j <= i; j++) {
    linea += "* ";
  }

  salida9.textContent += linea + "\n";
}