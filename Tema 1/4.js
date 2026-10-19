const salida4 = document.getElementById('salida4');
let texto4 = 'resultado';
salida4.textContent = texto4;

let nota = 9;

if(nota >= 9){
    salida4.textContent = "Sobresaliente, Felicidades!!"
}else if(nota >= 7){
    salida4.textContent = "Notable";
}else if(nota >= 5){
    salida4.textContent = "Aprobado";
}else{
    salida4.textContent = "Suspenso";
}