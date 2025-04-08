// ======================
// OBJETOS / DICIONÁRIOS
// ======================

// Dicionários / Objects são variáveis que eu posso nomear os índices ao invés de serem somente números
let pessoas = {
    nome: 'Mariah',
    idade: 5,
    escola: 'Van Gogh'
};
console.log(pessoas);

// Produto de uniforme
let Produto = {
    Tipo: 'Camiseta',
    Preco: 39.90,
    emEstoque: true
};
console.log(Produto.Tipo); // Acessando a chave "Tipo"
Produto.Cor = 'Preta'; // Adicionando uma nova chave
console.log(Produto);
Produto.Preco = 29.90; // Atualizando o preço
console.log(Produto);
delete Produto.emEstoque; // Removendo a chave "emEstoque"
console.log(Produto);

// Curso
let Curso = {
    Curso: 'Analise e desenvolvimento de sistemas',
    id: 'carlos',
    idade: 22
};
Curso.Nota = 8.5; // Adicionando uma nova chave
Curso.Curso = 'Engenharia de software'; // Atualizando o curso
let Chaves = Object.keys(Curso); // Pegando todas as chaves do objeto
console.log(Chaves);

let tarefa = {
    ID: 1,
    DESCRICAO: 'Acordar',
    Status: 'CHECK',
    PRIORIDADE: 'TOMAR CAFÉ'
};
tarefa.DESCRICAO = 'Despertador'; // Editar valor é só reatribuir Objeto.Chave = 'novo Valor'
tarefa.Dias = 'Seg a Sex'; // Adicionar novo item Objeto.novaChave = 'Valor'
delete tarefa.Status; // Deletar = Objeto.Chave;
Object.keys(tarefa); // Listar as chaves
console.log(tarefa);

let livro = {
    Titulo: 'O Hobbit',
    Autor: 'J.R.R TOLKIEN',
    Ano: 1937
};
livro.Genero = 'Fantasia'; // Criando novo item
console.log(livro.Ano); // Acessar valores objeto.chave
console.log(livro.Titulo);
console.log(livro);

let pessoa = {
    nome: 'Thaina',
    idade: 24,
    estado: 'São Paulo'
};
pessoa.idade = 25; // Editando
delete pessoa.idade; // Delete
pessoa.curso = 'Arquitetura'; // Criando novo item
console.log('nome' in pessoa); // Verifica se a chave está no dicionário
console.log(Object.keys(pessoa)); // Visualizar somente os objetos
console.log(Object.values(pessoa)); // Visualizar os valores

// Se eu quiser usar os métodos preciso criar uma nova variável e atribuir o objeto que eu quero
let valores = Object.keys(pessoa); // Criando nova variável para usar métodos
valores.sort();
valores.shift();
valores.push('TESTE');
console.log(valores);

let filmefavorito = {
    Name: 'A origem',
    Ano: 2007,
    Diretor: 'Rian',
    Assistindo: false
};
console.log(filmefavorito.Name);
filmefavorito.Assistindo = true;
console.log(filmefavorito);
console.log(Object.values(filmefavorito));
console.log('Diretor' in filmefavorito);
// Aqui eu criei o const pra poder usar os métodos no objeto, transformando em array de chaves
const valoresfilme = Object.keys(filmefavorito);
console.log(valoresfilme);
console.log(valoresfilme.includes('Diretor'));