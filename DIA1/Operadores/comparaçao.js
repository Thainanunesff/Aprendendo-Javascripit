let number = parseInt(prompt("Digite um numero inteiro: "))
let number2 = parseInt(prompt("Digite um numero interio: "))

alert("Aqui esta as comparaçoes: \n" +
      "Maior = " + (number > number2) + "\n" +
      "Menor = " + (number < number2) + "\n" +
      "igual = " + (number == number) + "\n" +
      "Mesmo tipo primitivo = " + (number === number2) + "\n" +
      "Os numeros sao iguais? = " + (number !== number2)
); 

// VALORES BOOLEANOS SAO: ENQUANTO... FAÇA X COISA

let ativo = true;
let inativo = false;

console.log(typeof ativo);
console.log(typeof inativo);