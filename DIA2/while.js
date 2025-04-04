//A estrutura while (enquanto) é um laço de repetição que executa um bloco de código enquanto uma condição for verdadeira.

// Exercícios de laços "while" em JavaScript
// Laços de repetição com while

// Exercício 1:
// Crie um laço while que imprima no console os números de 1 a 10.
let numero = 1;
while (numero < 11) {
    console.log(numero)
    numero += 1
}


// Exercício 2:
// Crie um laço while que peça ao usuário para digitar um número (utilize prompt())
// e continue pedindo enquanto o número for menor ou igual a 100.
// Quando o número for maior que 100, exiba "Número aceito!" e encerre o laço.
let num = parseInt(prompt(`Digite um numero menor que 100: `));
while (num <= 100) {
    num = parseInt(prompt(`Digite um numero menor que 100: `));
}

console.log(`Numero aceito.`)

// Exercício 3:
// Crie um laço while que some todos os números de 1 até um número n,
// onde n é digitado pelo usuário, e exiba o resultado final no console.
let n = parseInt(prompt(`Digite um numero final: `));
let inicio = 1;
let soma = 0;
while (inicio <= n) {
    soma += inicio;
    inicio++;
}
console.log(`A soma de 1 até ${n} é: ${soma}`);


// Exercício 4:
// Crie um laço while que imprima a tabuada de um número fornecido pelo usuário.
// Por exemplo, se o usuário digitar 3, exiba 3x1, 3x2, ..., 3x10.
let numeroTabuada = parseInt(prompt(`Digite um numero para a tabuada: `));
let contador = 1;
while (contador <= 10) {
    console.log(`${numeroTabuada} x ${contador} = ${numeroTabuada * contador}`);
    contador++;
}


// Exercício 5:
// Crie um laço while que calcule o fatorial de um número digitado pelo usuário.
// Exemplo: fatorial de 5 é 5 * 4 * 3 * 2 * 1.
let fatorialDe = parseInt(prompt(`Digite um numero para calcular o fatorial: `));
let fatorial = 1;
let i = fatorialDe;
while (i > 1) {
    fatorial *= i;
    i--;
}
console.log(`O fatorial de ${fatorialDe} é: ${fatorial}`);


// Exercício 6:
// Crie um laço while que imprima todos os números pares entre 1 e 20.
let par = 1;
while (par <= 20) {
    if (par % 2 === 0) {
        console.log(par);
    }
    par++;
}


// Exercício 7:
// Crie um laço while que simule uma contagem regressiva de 10 até 0.
// Quando chegar a 0, imprima "Liftoff!".
let contagem = 10;
while (contagem >= 0) {
    console.log(contagem);
    contagem--;
}
console.log("Liftoff!");


// Exercício 8:
// Crie um laço while que pergunte ao usuário se ele deseja continuar (utilize prompt())
// Aceitando as respostas "sim" ou "não". O laço deve continuar enquanto a resposta for "sim".
// Ao sair do laço, exiba uma mensagem de encerramento.
let resposta = prompt("Deseja continuar? (sim/não)").toLowerCase();
while (resposta === "sim") {
    resposta = prompt("Deseja continuar? (sim/não)").toLowerCase();
}
console.log("Encerrando o programa. Até mais!");
