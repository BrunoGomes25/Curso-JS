 function criaPessoa (nome, sobrenome){
    return{nome,
    sobrenome,
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
        }
    }
 }
 const p1 = criaPessoa('Bruno', 'Gomes')
 console.log(p1.nomeCompleto())
 






 /* const pessoa1 = {
    nome: 'bruno',
    sobrenome: 'gomes',
    idade: 24,
    falanome:function(){
        return(`meu nome é : ${this.nome} `)
    },
    getDataNascimento: function(){
        const dataAtual = new Date()
        return dataAtual.getFullYear() - this.idade
    }

}
for(let chave in pessoa1){
    console.log(chave, pessoa1[chave])
} */
