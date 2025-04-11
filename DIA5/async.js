//FUNÇOES ASSINCRONAS SAO FUNÇOES QUE EU FAÇO UMA REQUISIÇAO PARA UM SERVIDOR PEDINDO UM DADO, EXEM: ESTOQUE, CEP, CPF, CLIMA, DATA DE NASCIMENTO ETC. 
//NAS FUNÇOES ASSINCRONAS EU DECLARO ISSO, E PEÇO 'WAIT' PARA O CODIGO ESPERAR ESTE DADO PARA PROSEGUIR

//Sintase Base

async function Buscardados() {//Cria uma funçao assincrona que possa usar o await
    try { //tente fazer isso
        const resposta = await fetch('Https://Buscardados.com/') //FETCH = fazendo uma requisiçao https
        const dados = await resposta.json(); //CONVERTE OS DADOS PARA JSON
        console.log(dados); //IMPRIME OS DADOS
  } catch (erro) { //CATCH CAPTURA O ERRO E TE INFORMA
        console.log(`Erro ao buscar dados`, erro);
    }   
}

async function buscarclima() {
    try {
        const clima = await fetch('https://mocki.io/v1/8b8f59f5-1e49-42e3-9292-b0b85e84542b');
        const tempo = await clima.json();
        console.log(tempo);
    } catch (error) {
        console.log(`dados indisponivel`, error)
    }
}
buscarclima();


//JSON SAO DADOS PUROS - GERALMENTE VINDOS DE UMA API 

const json = '{"NOME":"THAINA","IDADE": 23}';
const dadosproduto = JSON.parse(json)
console.log(dadosproduto);

//Voce trata esse dado e transforma o JSON EM UM OBJETO PRA PODE MANIPULAR MELHOR SE NECESSARIO SE NAO PODE SO IMPRIMIR ELE USANDO JSON.PARSE()

async function Buscarpersonagem() {
    try {
        const awnser = await fetch('https://rickandmortyapi.com/api/character/1');
        const personagem = await awnser.json();
        //tratando os dados que viraram objetos
        console.log(`O nome do personagem é ${personagem.name}`)
        console.log(`A especie dele é ${personagem.species}`)
        console.log(`Hoje ele está ${personagem.status}`)
        //tratamento de erro
    } catch (not) {
        console.log(`Ocorreu, um erro.`, not)
    }
}
Buscarpersonagem();

//Buscar usuario
SSS

async function buscar() {
    try {
        const request = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const tratar = await request.json();
        //validando dados
        if (!dados || !dados.nome || !dados.email) {
            console.log("Erro. Dado incompleto.")
        } else {
            console.log(`Usuario: ${dados.nome}`)
            console.log(`Email: ${dados.email}`)
        }
    } catch (bug) {
        console.log(`Erro ao conectar com API.`,bug)
    }
}
buscar()