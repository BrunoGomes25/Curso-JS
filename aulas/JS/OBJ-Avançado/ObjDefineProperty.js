// definiProperty - defineProperties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true // configuravel
    })
    Object.defineProperties(this,{
        nome:{
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar
            configurable: true // configuravel
        },
        nome:{
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, // pode alterar
            configurable: true // configuravel
        }
    })
}

const p1 = new Produto('camisa', 20, 3)
p1.estoque = 500000
console.log(p1)