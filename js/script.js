/*
    - Scrivi un programma che stampi in console i numeri da 1 a 100:
    - I multipli di 3 devono avere come output “Fizz”
    - I multipli di 5 devono avere come output “Buzz”
    - I multipli sia di 3 che di 5 devono avere come output “FizzBuzz”
CONSIGLI: 
    - Scrivere i commenti in Italiano
*/

const element = document.getElementById("demo");

for (let i = 1; i <= 100; i++) {
    console.log(i);

    if (i % 3 === 0 && number % 5 === 0) {
        element.innerHTML += '<p class="font-red"> FizzBuzz </p>';
    } else if (i % 3 === 0) {
        element.innerHTML += '<p class="font-green"> Fizz </p>';
    } else if (i % 5 === 0) {
        element.innerHTML += '<p class="font-darkblue"> Buzz </p>';
    } else {
        element.innerHTML += '<p class="font-orange"> ' + i + '</p>';
    }

}

