

// Estruturas de repetição em JavaScript

/*
  O loop "for" é uma estrutura de repetição utilizada para executar um bloco de código 
  várias vezes, de acordo com uma condição definida. 
  Ele segue a seguinte estrutura:

  for (inicialização; condição; incremento/decremento) {
      // Código a ser executado a cada iteração
  }
*/

// 1. Contagem de 1 a 10
// Este loop começa em 1 e incrementa até chegar a 10, exibindo cada número no console.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Contagem regressiva de 10 a 1
// Aqui, o loop começa em 10 e decrementa até 1, exibindo cada número no console.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 3. Contando de 2 em 2 até 20
// Começamos em 2 e vamos até 20, incrementando de 2 em 2, ou seja, exibindo apenas números pares.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 4. Contagem regressiva de 50 a 0, de 5 em 5
// O loop começa em 50 e decrementa de 5 em 5 até chegar a 0.
for (let i = 50; i >= 0; i -= 5) {
    console.log(i);
}

// 5. Contando números ímpares de 1 a 15
// O loop começa em 1 e incrementa de 2 em 2, garantindo que apenas números ímpares sejam exibidos.
for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}

// 6. Exibindo a tabuada do 7
// O loop percorre os números de 1 a 10, multiplicando cada um deles por 7 e exibindo o resultado.
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 7. Somando todos os números de 1 a 100
// Criamos uma variável "total" que começa em 0 e, a cada iteração, somamos o valor de i a ela.
let total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
}
console.log("Soma total de 1 a 100:", total);

// 8. Contagem regressiva de 100 a 1, pulando de 3 em 3
// Começamos em 100 e vamos decrementando de 3 em 3 até chegar a 1.
for (let i = 100; i >= 1; i -= 3) {
    console.log(i);
}

// 9.Mostra a tabuada do número 5, de 1 até 10.
for (i = 5; i <= 50; i += 5) {
    console.log(`5 x ${i} = ${i}`)
}

// 10 Soma só os números pares até 100.
for (i = 0; i <= 100; i += 2) {
    console.log(i)
}
