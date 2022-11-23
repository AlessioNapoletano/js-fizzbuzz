/*
    - Scrivi un programma che stampi in console i numeri da 1 a 100:
    - I multipli di 3 devono avere come output “Fizz”
    - I multipli di 5 devono avere come output “Buzz”
    - I multipli sia di 3 che di 5 devono avere come output “FizzBuzz”
CONSIGLI: 
    - Scrivere i commenti in Italiano
*/

const element = document.getElementById("demo");

let number = 0;

for (let i = 0; i < 100; i++) {
    number++;
    console.log(number);

    if (number % 3 === 0 && number % 5 === 0) {
        element.innerHTML += '<p class="font-red"> FizzBuzz </p>';
    } else if (number % 3 === 0) {
        element.innerHTML += '<p class="font-green"> Fizz </p>';
    } else if (number % 5 === 0) {
        element.innerHTML += '<p class="font-darkblue"> Buzz </p>';
    } else {
        element.innerHTML += '<p class="font-orange"> ' + number + '</p>';
    }

}

