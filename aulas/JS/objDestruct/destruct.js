const pessoa = {
    nome: 'bruno',
    sobrenome: 'gomes',
    idade: 24,
    endereco:{
        rua: 'viena',
        numero: 25
    }
};

// atribuiçao via desestruturaçao
const { nome, sobrenome, idade, endereco:{rua,numero}} = pessoa
console.log(nome, sobrenome, idade, rua, numero)

// ... rest (pega o resto das propriedades)