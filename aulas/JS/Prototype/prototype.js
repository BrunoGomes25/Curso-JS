/*
Javascript é baseada em prototipo s para passar propriedades e metodos
de um objeto par outro.

definiçao de prototipo:
prototipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produçoes.

Todos os objetos tem uma referencia interna para um prototipo (__proto__)
que vem da propriedade prototype da funçao construtora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no proprio objeto e depois a cadeia 
de prototipos é usada ate o topo (null) ate encontrar (ou nao) tal membro.

*/

// construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}
Pessoa.prototype.nomeCompleto = () => {
    this.nome + ' ' + this.sobrenome;
}
// instancia

const pessoa1 = new Pessoa ('Luiz', 'O.'); // <- Pessoa = funcao construtora
const pessoa2 = new Pessoa ('Maria', 'A.'); // <- Pessoa = funcao construtora
console.dir(pessoa1);
console.dir(pessoa2);