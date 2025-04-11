//FUNÇOES ASSINCRONAS SAO FUNÇOES QUE EU VOU FAZER A REQUISIÇAO DE ALGUM DADO PARA O SERVIDOR ME RETORNAR, ENQUANTO ESTE DADO NAO FOR BUSCADO O CODIGO IRA ESPERAR PARA PROSEGUIR SE NAO DARA ERRO
//AWAIT EU ESTOU PEDINDO PRA ESPERAR
//PROMISES ESTOU PROMETENDO QUE IREI ENTREGAR O DADO MAS NAO SEI SE DARA CERTO, ELA TEM 3 ESTADOS:
//PENDENTE, RESOLVIDA, REJEITADA
// TAMBEM USAMOS O FECTH() QUE SIGNIFICA QUE ESTOU FAZENDO UMA REQUISIÇAO DE PROTOCOLO HTTPS

// POR EXEMPLO SE EU PRECISAR PEGAR UM CPF EU VOU PEDIR PRO MEU CODIGO ESPERAR EU VALIDAR ELE PARA CONTINUAR

//promessa simples
const promessa = new Promise((resolve,reject) => {
    let tudocerto = false;

    if (tudocerto) {
        resolve(`Funcionou, tudo certo com a promessa!`);
    } else {
        reject (`Deu ruim! a promessa foi rejeitada.`);

    }
});

//Usando a promessa 
promessa 
    .then((mensagem) => {
     console.log(`Sucesso:`, mensagem);
    }) // EXECUTADO QUANDO O RESOLVE É CHAMADO
    .catch((erro) => {
     console.log(`Erro:`, erro);
    }); // EXECUTADO QUANDO O REJECT É CHAMADO

    //exemplo de calculo 
    const verificarcalculo = new Promise((resolve, reject) => {
        const resultado = 10 / 2;

        if (resultado === 5) {
            resolve(`Calculo correto, resultado é 5`);
        } else {
            reject(`Calculo errado, vamos novamente.`)
        }
    });
    
// Exemplo 2

    verificarcalculo
    .then((mensagem) => {
        console.log(`Sucesso. `,mensagem);
    })
    .catch((erro) => {
        console.log(`Erro! `,erro);
    });

//===================================================
//Exercicio 3 

const divisao = new Promise((resolve, reject) => {
    const conta = 20 / 4;

    if (conta === 5) {
        resolve (`Parabens, voce acertou.`)
    } else {
        reject (`Calculo incorreto, vamos refazer`)
    }
});
////THEN E CATCH: Aqui eu vou dar a resposta se der certo ou nao
    divisao
    .then((mensagem) => {
        console.log(`Correto`, mensagem)
    }) 
    .catch((erro) => {
        console.log(`Erro. `, erro)
    })

//===============================================================
//Exercicio 4

const avaliacao = new Promise((resolve, reject) => {
    const nota = 7;

    if (nota >= 7) {
        resolve(`Parabens! voce passou.`)
    } else {
        reject(`Infelizmente voce nao passou`)
    }
});

avaliacao
.then((mensagem) => {
    console.log(mensagem)
})
.catch((erro) => {
    console.log(erro)
});

//======================================
// Simula a verificação de estoque (como se fosse no banco de dados)
function verificarEstoque(produto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const estoque = ['pera', 'maçã', 'pera'];
            if (estoque.includes(produto)) {
                resolve(`Produto "${produto}" está disponível.`);
            } else {
                reject(`Produto "${produto}" não está no estoque.`);
            }
        }, 1500);
    });
}

// Função assíncrona que vai chamar a promise
async function checarProduto(produto) {
    try {
        const resultado = await verificarEstoque(produto);
        console.log('SUCESSO:', resultado);
    } catch (erro) {
        console.log('ERRO:', erro);
    }
}

// Troque o produto aqui e veja o que acontece
checarProduto('banana');


async function fazerlogin(nome) {
    try { 
        console.log('Buscando usuario....');
        const resposta = await buscarusuario(nome);
        console.log(resposta);
    } catch (erro) {
        console.log('Erro', erro)
    }
}
fazerlogin('Thaina');

async function verificarusuario(usuario) {
    return new Promise(resolve, reject) => {
        if (usuario === 'thaina') {
            resolve('Login autorizado');
        } else {
    reject ('Usuairo nao encontrado');
    }
}


function verificar() {
    return new Promise((resolve,reject) => {
        const sucesso = true;
        if (sucesso) {
            resolve('Tudo certo, promessa cumprida');
        } else {
            reject('Infelizmeente nao foi cumprida');
        }
    }
);

//criando funçao assincrona que vai lidar com a promessa que eu fiz 

async function executarverificacao() {
    try {
        const resultado = await verificaralgo();
        console.log('sucesso', resultado)
    } catch (erro) {
        console.log('erro',erro)
    }
}
    
}
executarverificacao();


function testar() {
    return new Promise((resolve, reject) => {
        const mercado = ['Maça', 'Abacate']
        if (mercado.includes('Maça')) {
            resolve ('Temos este item no estoque')
        } else {
            reject('Infelizmente item esta indisppnivel')
        }
    });
}

    async function verificarestoque() {
        try { 
            const estoque = await mercado(); 
        console.log('Positivo', estoque)} 
        catch (erro) {
            console.log('Negativo', erro)
        }
    }

verificarestoque();

function verificarconvidado(usuario) {
    return new Promise ((resolve,reject) => {
     const nomes = ['Ana','Edu','Carla']; 
    if (nomes.includes(usuario)) {
        resolve(`${usuario} esta na lista`) 
    } else {
       reject (`${usuario} O convidado nao esta na lista.`);
}
    });
}

async function verificarusuario(usuario) {
    try {
        const aprovado = await verificarconvidade(usuario)
        console.log('Pode entrar.', aprovado);
    } catch(reprovado) {
    console.log(' ', reprovado);
}
}

verificarconvidade('Ana');