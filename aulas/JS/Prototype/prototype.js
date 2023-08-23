// construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// instancia

const pessoa1 = new Pessoa ('Luiz', 'O.'); // <- Pessoa = funcao construtora
const pessoa2 = new Pessoa ('Maria', 'A.'); // <- Pessoa = funcao construtora
console.dir(pessoa1);
console.dir(pessoa2);