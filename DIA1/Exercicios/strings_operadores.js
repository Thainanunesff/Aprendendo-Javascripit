// Exercícios de JavaScript - Strings e Operadores

// Exercício 1: Concatenação de Strings
// Crie duas variáveis com seu primeiro nome e sobrenome. 
// Depois, junte-as em uma única variável chamada nomeCompleto e exiba no console.

let nome = Thaina;
let sobrenome = Nunes;
let nomeCompleto = nome + " " + sobrenome;
console.log(Meu nome completo é: ${nomeCompleto});

// Exercício 2: Comparação de Strings
// Peça ao usuário para digitar duas palavras diferentes e verifique se elas são iguais ou diferentes.

let palavra1 = prompt(`Digite uma palavra: `);
let palavra2 = prompt(`Digite outra palavra: `);

if (palavra1 === palavra2) {
    alert(As palavras digitadas são iguais: ${palavra1});
} else {
    alert(As palavras digitadas são diferentes: "${palavra1}" e "${palavra2}".);
}

// Exercício 3: Manipulação de Strings
// Peça ao usuário um nome e exiba a quantidade de letras que ele tem.

let usuario = prompt(`Digite um nome: `);
alert(O nome ${usuario} tem ${usuario.length} letras.);

// Exercício 4: Extração de Parte de uma String
// Peça ao usuário para digitar uma frase e exiba apenas os primeiros 10 caracteres.

let frase = prompt(`Digite uma frase: `);
alert(frase.slice(0, 10));

// Exercício 5: Template Strings
// Peça ao usuário para digitar um produto e um preço. Exiba a frase formatada: 
// "O produto X custa Y reais."

let produto = prompt(`Digite um produto: `);
let valor = parseFloat(prompt(`Digite o valor: `));
alert(O produto ${produto} custará R$ ${valor.toFixed(2)}.);

// Exercício 6: Operadores de Comparação
// Peça dois números ao usuário e verifique se o primeiro é maior que o segundo.

let x = parseInt(prompt(Digite um número inteiro:));
let y = parseInt(prompt(Digite outro número inteiro:));

if (x > y) {
    alert(${x} é maior que ${y});
} else if (x < y) {
    alert(${x} é menor que ${y});
} else {
    alert(${x} e ${y} são iguais.);
}

// Exercício 7: Índices de String
// Peça ao usuário para digitar uma palavra e exiba a primeira e a última letra dela.

let palavra = prompt(`Digite uma palavra: `);
alert(Primeira letra: ${palavra[0]});
alert(Última letra: ${palavra[palavra.length - 1]});

// Perguntas Abertas

// 1. Qual a diferença entre == e === em JavaScript? 
// == compara apenas o valor, enquanto === compara valor e tipo de dado.

// 2. O que acontece se usarmos slice() com índices negativos? 
// Se passarmos um índice negativo, o slice() começará a contar de trás para frente. 
// Exemplo: "JavaScript".slice(-3) retorna "ipt".

// 3. Como podemos substituir uma palavra dentro de uma string em JavaScript? 
// Podemos usar o método replace(). Exemplo:
// "Olá, mundo!".replace("mundo", "JavaScript") retorna "Olá, JavaScript!".

// 4. Explique a diferença entre parseInt(), parseFloat() e Number(): 
// - parseInt(): Converte para número inteiro, ignorando decimais.
// - parseFloat(): Converte para número decimal (ponto flutuante).
// - Number(): Converte para número, podendo ser inteiro ou decimal, dependendo do valor.