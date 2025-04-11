const promessa = new Promise((resolve,reject) => {
    let chocolate = true;
    if (chocolate) {
        resolve (`Temos chocolate`);
    } else {
        reject (`Nao temos chocolate.`)
    }
});

promessa 
.then(resposta => {
    console.log('SIM.', resposta);
})
.catch(erro => {
    console.log('NAO.', erro);

});

const num = 8
const verificacao = new Promise((resolve,reject) => {
    if (num > 10) {
        resolve(`${num} É maior que 10.`)
    } else {
        reject(`Afirmaçao errado, ${num} nao é maior que 10.`)
    }
});
verificacao
.then(certo => {
    console.log('Correto.', mensagem)
}).catch(erro => {
    console.log('Errado. ', erro)
});

const VerificaEstoque = new Promise((resolve,reject) => {
    let lista = ['maça']
    if (lista.includes('maça')) {
        resolve('Eu tenho uma maça.')
    } else { 
        reject('Infelizmente eu não tenho uma maça.')
    }
});

VerificaEstoque 
.then(positivo => {
    console.log('Sim. ', positivo)
}).catch(negativo => {
    console.log('Não.',negativo)
});

const Number = new Promise((resolve, reject) => {
    let num = 10;
    if (num % 2 === 0) {
        resolve(`${num} é par.`)
    } else {
        reject(`${num} é impar.`)
    };
});

Number 
.then(sim => {
    console.log('Sim.', sim)
}).catch(nao => {
    console.log('Nao', nao)
})

function autenticarlogin(usuario) {
    return new Promise((resolve, reject) => {
    if (usuario.includes('Admin')) {
        resolve(`${usuario} liberado`)
    } else {
        reject(`${usuario} nao esta no sistema.`)
    }
})
}

autenticarlogin('Admin')
.then(yes => console.log('Sim.' ,yes)
).catch(not => console.log('Nao.', not));