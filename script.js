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

/*
Atividade 16:
let frutas= ["maçã","manga","banana","uva", "abacaxi"];
console.log("O terceiro elemento é", frutas[2]); // começa em zero, ou seja a banana é o número 2
*/


/*
Atividade 17:
function saudacao(nome) {
   return("Bem-vindo(a),"+nome)
   
}

let digitaNome= prompt("qual é seu nome?");
let fraseCompleta= saudacao(digitaNome);

console.log(fraseCompleta);
*/

/*
Atividade 18:
function verificarAprovacao(nota) {
   if (nota >=6 ) {
      console.log("Voce foi aprovado");

   } else {
      console.log("Voce foi reprovado");
   }
}

   let aprovacao = parseFloat(prompt("Digite sua nota:"));

    verificarAprovacao(aprovacao);
   */

/*
Atividade 19:
for(let i=0; i <=30; i++){
   if(i %2 === 0){
      console.log(i);
   }
}

*/

/*
Atividade 20:

function contarVogais(palavra){
   let vogais= "aeiouAEIOU";
   let contador= 0;
     
   for(let i=0; i<palavra.length; i++){
      if( vogais.includes(palavra[i])){
         contador++;
      }

   }
   return contador;
}
let palavra = prompt("Digite uma palavra:");
let quantidadeVogais = contarVogais(palavra);
console.log(` a palavra" ${palavra}" tem ${quantidadeVogais} vogais`);
*/

/*
Atividade 21:

function somarArray(numeros){
   let soma = 0;
   
   for(let i = 0; i <numeros.length; i++){
      soma += numeros [i];

   }
   return soma;
}
let numeros= [1, 2, 3, 4, 5, 6];


let resultado = somarArray(numeros);
console.log(` A soma dos elementos do array é:  ${resultado}`);
*/

/*
Atividade 22:

function dobrarNumeros(numero){
   return(numero*2);
}

let receberNumero = parseFloat(prompt("digite um número"));
 
console.log(` O número dobrado é: ${dobrarNumeros(receberNumero)}`);
*/

/*
Atividade 23:
let numero= 2;

while (numero<=20){
   console.log(numero);
   numero +=2;
}
*/

/*
Atividade 24:
function capitalizar(texto) {
   return texto.charAt(0).toUpperCase() + texto.slice(1);
}

let palavra = prompt("Digite uma palavra:");
let resultado = capitalizar(palavra);
console.log(resultado);
*/

function anoBissexto(ano){
   return( ano %4==0 && ano% 100 !== 0) || (ano % 400 === 0);

}
 let ano= parseInt(prompt("digite um ano:"));
let resultado= anoBissexto(ano);

if(resultado){
   console.log(`${ano} é um ano bissexto`);
} else{
   console.log(`${ano} não é um ano bissexto`);
}