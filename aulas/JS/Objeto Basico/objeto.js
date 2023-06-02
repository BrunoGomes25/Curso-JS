function criaPessoa ( nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
const pessoa1 = criaPessoa('francisco', 'douguinha', 25)
//console.log(pessoa1)

const pessoa2 = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 25,

    fala(){
        console.log(` A minha idade atual é ${this.idade}`)
    }
}
pessoa2.fala()