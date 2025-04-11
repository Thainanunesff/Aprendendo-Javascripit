function hello() {
    console.log('Hello world!!')
}
hello()

function soma(x,y) {
    return x+y
}
const resultado = soma(5,2)
console.log(resultado)//7

function subtracao(a,b) {
    return a - b
}
const tot = subtracao(8,3)
console.log(tot)//5

function recado(texto) {
    return `Ola ${texto} como vai voce?`
}
msg = recado('Boa noite')
console.log(msg)//'Ola Boa noite como vai voce?'

//usando metodo

const lista = {
    nome: 'renan',
    idade: 29,
    saudacao : function hellow(nome,idade) {
        return `Ola meu nome é ${this.nome} e eu tenho ${this.idade} anos`
    }
}
const print = lista
console.log(lista.saudacao())

const frutas = {
    banana : ' Prata',
    Maça: 'Gala',
    Pera: 'Maçã',
    Hortifruti : function opcoes(banana,Maça,Pera) {
        return `A aqui temos as opçoes: ${this.banana}, ${this.Maça}, ${this.Pera}`
    }
}
const escolha = frutas
console.log(frutas.Hortifruti())
