// Exercícios de JavaScript - Strings e Operadores

// Exercício 1: Concatenação de Strings
// Crie duas variáveis com seu primeiro nome e sobrenome. 
// Depois, junte-as em uma única variável chamada nomeCompleto e exiba no console.

let nome = `Thaina`;
let sobrenome = `Nunes`;
let nomecompleto = nome + sobrenome
console.log(`Meu nome completo é: ${nomecompleto}`);

// Exercício 2: Comparação de Strings
// Peça ao usuário para digitar duas palavras diferentes e verifique se elas são iguais ou diferentes.

let um = prompt(`Digite uma palavra: `);
let dois = prompt(`Digite outra palavra: `);
if (um === dois) {
    alert(`As palavras ${um} e ${dois} sao iguais`);}
else {
    alert(`Não são iguais.`)
}

// Exercício 3: Manipulação de Strings
// Peça ao usuário um nome e exiba a quantidade de letras que ele tem.

let usuario = prompt(`Digite um nome: `);
alert(`O nome ${usuario} tem ${usuario.length()} letras.`)

// Exercício 4: Extração de Parte de uma String
// Peça ao usuário para digitar uma frase e exiba apenas os primeiros 10 caracteres.

let frase = prompt(`Digita pra mim uma frase: `);
alert(frase.slice(0,10));

// Exercício 5: Template Strings
// Peça ao usuário para digitar um produto e um preço. Exiba a frase formatada: 
// "O produto X custa Y reais."

let produto = prompt(`Digite um produto: `);
let valor = prompt(`Digite o valor: `);
alert(`O produto ${produto} custará R$ ${valor}.`);

// Exercício 6: Operadores de Comparação
// Peça dois números ao usuário e verifique se o primeiro é maior que o segundo.

let x = parseInt(prompt(`Digite um numero inteiro: `));
let y = parseInt(prompt(`Digite outro valor: `));
let comparativo = x > y;
alert(comparativo)

// Exercício 7: Índices de String
// Peça ao usuário para digitar uma palavra e exiba a primeira e a última letra dela.
let palavra = prompt(`Digite uma palavra: `)
alert(palavra[0]);
alert(palavra[-1]);

// Perguntas Abertas

// 1. Qual a diferença entre == e === em JavaScript? 
// == signifca ser identico e === significa ser o mesmo tipo primitivo.

// 2. O que acontece se usarmos slice() com índices negativos? 
// ele corrige.

// 3. Como podemos substituir uma palavra dentro de uma string em JavaScript? 
// usando o metodo .replace(antiga,nova)

// 4. Explique a diferença entre parseInt(), parseFloat() e Number(): 
// ParseInt usamos quando vamos nomear que estamos pedindo no navegador um numero inteiro, ParseFloat usamos quando chamamos um numero flutuante 
// Number é simplsmente quando estou nomeando qual é o meu tipo primitivo.