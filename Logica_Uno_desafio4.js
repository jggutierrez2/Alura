//1.
console.log('Biemvenido:...');

//2
let nombre1 = "JOHNN";
console.log(nombre1);
console.log(`Hola! ${nombre1}`);
//3
let nombre2 = "JOHNN";
console.log(nombre2);
alert(`Hola! ${nombre2}`);

//4
let resp = prompt('Cual es el lenguaje de programacion que mas te gusta?: ');
console.log(resp);
//5
let valor1 = 2;
let valor2 = 8;
let resultado = valor1 + valor2;
console.log(`La suma de [${valor1}] y [${valor2}] es igual a [${resultado}].`);

//6
let valor10 = 2;
let valor20 = 8;
let resultado0 = valor10 - valor20;
console.log(`La resta de [${valor10}] y [${valor20}] es igual a [${resultado0}].`);
//7
let edad = prompt("Ingrese su edad: ");
if (edad >= 18)
    alert('Eres mayor de edad')
else
    alert('Eres menor de edad');

//8
let numero1 = prompt("Ingrese su edad: ");
if (numero1 >= 0)
    alert('El numero digitado es positivo')
else
    alert('El numero digitado es negativo');

//9
let numero2 = 0;
while (numero2 < 11) {
    console.log(numero2);
    numero2++;
}

//10
let nota = 50;
if (nota >= 7)
    console.log('Aprobado')
else
    console.log('Reprobado');

//11
let numeroR = Math.random();
console.log(numeroR);

//12
let numeroX = Math.floor(Math.random() * 10 + 1);
console.log(numeroX);

//13
let numeroE = Math.floor(Math.random() * 1000 + 1);
console.log(numeroE);