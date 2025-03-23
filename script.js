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