const salida6 = document.getElementById('salida6');
let texto6 = 'resultado\n';
salida6.textContent = texto6;

for(let i = 20 ; i > 0; i--){
    if(i%3==0 && i%5==0){
        salida6.textContent += "FizzBuzz\n";
    }else if(i%3==0){
        salida6.textContent += "Fizz\n";
    }else if(i%5==0){
        salida6.textContent += "Buzz\n";
    }else{
        salida6.textContent += i + "\n";
    }
}

