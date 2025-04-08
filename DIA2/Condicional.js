// Estruturas Condicionais em JavaScript

/*
  As estruturas condicionais permitem que um código seja executado somente se uma condição for verdadeira.
  As principais estruturas condicionais em JavaScript são:
  
  - if: verifica uma condição e executa um bloco de código se for verdadeira.
  - else: executa um bloco de código se a condição do if for falsa.
  - else if: permite verificar múltiplas condições.
  - operador ternário: uma forma simplificada de if/else.
*/

// 1. Verificando maioridade
// Se a idade for 18 ou mais, a pessoa é maior de idade. Caso contrário, é menor de idade.
let idade = 18;
if (idade >= 18) {
    console.log(`A Mariah tem ${idade} anos, é maior de idade.`);
} else {
    console.log(`A Mariah não tem 18 anos e é menor de idade ainda.`);
}

// 2. Avaliação de notas
// Verifica a nota do aluno e dá um feedback baseado na pontuação.
let nota = 7;
if (nota >= 9) {
    console.log(`Parabéns! Você foi super bem!`);
} else if (nota >= 6) {
    console.log(`Sua nota foi mediana, cuidado.`);
} else {
    console.log(`Infelizmente você está de recuperação.`);
}

// 3. Operador ternário
// Forma reduzida de if/else para verificar maioridade.
let anos = 16;
let status = anos >= 18 ? `Adulto.` : `Você ainda é menor de idade.`;
console.log(status);

// 4. Exercício: Verifique se uma pessoa pode votar
let usuario = parseInt(prompt(`Quantos anos você tem? `));
if (usuario >= 16) {
    alert(`Você tem ${usuario} anos, já pode votar!`);
} else {
    alert(`Infelizmente você não poderá votar ainda.`);
}

// 5. Verificação de login
let username = prompt(`Username: `).toLowerCase();
let senha = prompt(`Senha: `);
if (username === `admin` && senha === `1234`) {
    alert(`Acesso permitido.`);
} else {
    alert(`Acesso negado.`);
}

// 6. Nome com letras maiúsculas
let name = prompt(`Qual o seu nome?`).toUpperCase();
alert(`Seu nome em maiúsculas: ${name}, com ${name.length} caracteres.`);

// 7. Validação de formulário
let nome = prompt(`Primeiro nome: `);
let email = prompt(`Seu melhor email: `);
if (!nome || !email) {
    alert(`Preencha todos os campos.`);
} else {
    alert(`Validando cadastro.`);
}

// 8. Acesso a site adulto com operador ternário
let dado = parseInt(prompt(`Qual sua idade? `));
alert(dado >= 18 ? `Acesso liberado.` : `Acesso negado.`);

// 9. Avaliação de senha
let codigo = prompt(`Digite sua senha: `);
if (codigo === `12345`) {
    alert(`Acesso permitido`);
} else {
    alert(`Senha incorreta. Digite novamente.`);
}

// 10. Nível de experiência
let experiencia = parseInt(prompt(`Quantos anos de experiência você tem na área de TI? `));
if (experiencia < 1) {
    alert(`Iniciante.`);
} else if (experiencia >= 2 && experiencia < 5) {
    alert(`Intermediário.`);
} else {
    alert(`Sênior.`);
}

// 11. Cálculo de desconto
let compra = parseFloat(prompt(`Valor da compra: `));
if (compra >= 200) {
    let desconto20 = compra * 0.8;
    alert(`Sua compra de R$${compra.toFixed(2)} com 20% de desconto ficará: R$${desconto20.toFixed(2)}.`);
} else if (compra >= 100) {
    let desconto10 = compra * 0.9;
    alert(`Sua compra de R$${compra.toFixed(2)} com 10% de desconto ficará: R$${desconto10.toFixed(2)}.`);
} else {
    alert(`Valor abaixo do promocional.`);
}
