/*
    - Scrivi un programma che stampi in console i numeri da 1 a 100:
    - I multipli di 3 devono avere come output “Fizz”
    - I multipli di 5 devono avere come output “Buzz”
    - I multipli sia di 3 che di 5 devono avere come output “FizzBuzz”
CONSIGLI: 
    - Scrivere i commenti in Italiano
*/

const elemento = document.getElementById("demo");

let numero = 0;

for (let i = 0; i < 100; i++) {
    numero++;
    console.log(numero);

    if (numero % 3 === 0 && numero % 5 === 0) {
        elemento.innerHTML += '<p class="font-red"> FizzBuzz </p>';
    } else if (numero % 3 === 0) {
        elemento.innerHTML += '<p class="font-green"> Fizz </p>';
    } else if (numero % 5 === 0) {
        elemento.innerHTML += '<p class="font-darkblue"> Buzz </p>';
    } else {
        elemento.innerHTML += '<p> ' + numero + '</p>';
    }

}

