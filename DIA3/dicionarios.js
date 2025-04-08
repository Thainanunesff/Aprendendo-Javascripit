// ======================
// OBJETOS / DICIONÁRIOS
// ======================

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