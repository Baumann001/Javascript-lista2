/*
Atividade 11:
function verificarSinal(numero){
   if (numero > 0) {
    console.log(numero + " é positivo!   " );
   } else if (numero < 0 ) {
        console.log(numero + " é negativo "  );
   } else {
    console.log(numero + " é zero!  " );
   }
}

let numero = parseFloat(prompt("Digite um número:"));

verificarSinal(numero);
*/



function converterTemperatura(celsius){
   return ( celsius * 9/5   ) + 32;

}

let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em celsius:"));

let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius);

console.log(`A temperatura em Fahrenheit é: ${temperaturaFahrenheit}`);

