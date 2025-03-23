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



/*
Atividade 12:
function converterTemperatura(celsius){
   return ( celsius * 9/5   ) + 32;

}

let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em celsius:"));

let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius);

console.log(`A temperatura em Fahrenheit é: ${temperaturaFahrenheit}`);
*/


/*
Atividade 13:
let soma = 0;  
let numero = 1; 

while (soma < 100) {  // Continua até soma chegar a 100
    soma += numero;  // Adiciona 1 à soma
    console.log("Soma atual:", soma);  // Mostra a soma a cada passo
}

console.log("A soma final é:", soma);
*/


/*
Atividade 14:
function substituirPalavras(texto) {
   return texto.replace(/azul/g, "vermelho");
}

let frase= prompt("Digite sua frase:");

let novafrase= substituirPalavras(frase);


console.log(substituirPalavras(frase));
*/

/*
Atividade 15:
function verificarCaracteres(texto){
if ( texto.length>10){
   console.log("Essa tem mais de 10 caracteres");
}else{
   console.log("Essa frase tem 10 caracteres ou menos");
   }
}
      let frase=prompt("digite uma frase:");

      verificarCaracteres(frase);

*/

let frutas= ["maçã","manga","banana","uva", "abacaxi"];
console.log("O terceiro elemento é" frutas[2]);