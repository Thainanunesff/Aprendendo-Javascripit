// ===========================
// FUNÇÕES EM JAVASCRIPT
// ===========================

// Função é um bloco de código que depois de criado pode ser reutilizado várias vezes
// Sintaxe: function nomedafuncao(parametros) { código }
// "return" devolve um valor tratado pela função
// Argumentos são os valores reais que você passa no parametro quando chama a função

//Função Simples
function dizerOla() {
    console.log(`Ola! tudo bem?`)
}

// Função com texto e parâmetro
function bemvindo(nome) {
    return `Ola ${nome} seja bem vindo!`
}
let saudacao = bemvindo('Thaina');
console.log(saudacao)
dizerOla();

// Função com dois parâmetros
function soma(x,y) {
    return x + y; // Retorna a soma
}
let resultado = soma(2,3)
console.log(resultado)

function divisao(a,b) {
    return a / b
}
let total = divisao(90,2)
console.log(total)

function multiplicar(c,d) {
    return c * d // devolve o valor
}
const tot = multiplicar(98,2); // guarda o valor atribuído
console.log(tot) // imprime o resultado

// ===========================
// USANDO CONDICIONAL DENTRO DA FUNÇÃO
// ===========================

function saudando(nome,horario) {
    if (horario <= 12) {
      return  `Bom dia ${nome}, dormiu bem? (=`
    } else if (horario >= 13 && horario <=18) {
       return `Boa tarde ${nome}! `
    } else if (horario > 18) {
       return `Boa noite ${nome}`
    }
}
let mensagem = saudando('Thaina',14);
console.log(mensagem)


// ===========================
// FUNÇÃO DENTRO DE OBJETO = MÉTODO
// ===========================
const pessoa = {
    nome: 'Larisa',
    idade: 23,
    dizeroi: function() {
        return `OLA ${this.nome}, voce fez ${this.idade} anos hoje?`
    }
};
console.log(pessoa.dizeroi())

// ===========================
// FUNÇÃO ANÔNIMA
// ===========================
// Usada dentro de estruturas, sem nome próprio
const ola = function() {
    console.log(`Ola!`);
}
ola();

// ===========================
// CALLBACK
// ===========================
// Função callback é quando uma função executa outra assim que termina
// Exemplo: login feito → mostra mensagem

function fazerlogin(callback) {
    console.log(`Fazendo login`)
    setTimeout(() => {
        console.log(`Login autenticado`);
        callback(); // já chama a próxima função automaticamente
    }, 2000);
}
function mostrarmensagem() {
    console.log(`Seja bem vindo!`)
}
fazerlogin(mostrarmensagem);
