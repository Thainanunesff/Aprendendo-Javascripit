// ARRAYS / LISTAS
// ======================

let mercado = ['Banana', 'Arroz', 'Feijão'];
console.log(mercado[2]); // Acessando o item na posição 2 (Feijão)

let nome = ['Arthur', 'Mariah', 'Felipe'];
let sobrenome = ['Costa', 'Silva', 'Nunes'];

let final = nome.concat(sobrenome); // Concatenando os arrays nome + sobrenome
console.log(`Minha lista é: ${final.join(', ')}`); // join transforma em string separada por vírgula

// Lista de objetos e reversão
let objetos = ['Lápis', 'Caneta', 'Borracha', 'Apontador', 'Branquinho', 'Folha'];
objetos.reverse(); // Inverte a ordem dos itens
console.log(objetos);

let moveis = ['Mesa', 'Cadeiras'];
console.log(moveis);

// ======================
// MÉTODOS BÁSICOS DE ARRAYS
// ======================

let produtos = ['banana', 'Pera', 'Maça'];
console.log(produtos[2]); // Acessando o item "Maça"

produtos.unshift('Melao'); // Adiciona no início
produtos.push('Mexirica'); // Adiciona no fim
produtos.pop(); // Remove o último
produtos.shift(); // Remove o primeiro
console.log(produtos);

// Carrinho de compras
let Carrinho = ['Maça', 'Banana', 'Laranja'];
Carrinho.push('Uva'); // Adiciona Uva
Carrinho.shift(); // Remove o primeiro item
Carrinho.unshift('Melancia'); // Coloca Melancia no começo
console.log(Carrinho);

// Exercício 2: Lista de tarefas
let tarefas = ['Acordar', 'Banho', 'Estudar'];
tarefas.push('Almoçar', 'Resumo'); // Adiciona dois novos itens
tarefas.shift(); // Remove o primeiro
tarefas.splice(0, 1, 'Devocional'); // Troca o item na posição 0 por 'Devocional'
console.log(tarefas.length); // Exibe o tamanho da lista

// Exercício 3: Lista de nomes
let nomes = ['Pedro', 'Matheus', 'Jorge'];
console.log(nomes[1]); // Acessando 'Matheus'
nomes.push('Thaina'); // Adicionando um novo nome
console.log(nomes);
nomes.splice(2, 1); // Removendo o nome na posição 2 ('Jorge')
console.log(nomes);