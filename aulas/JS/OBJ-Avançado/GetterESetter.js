// definiProperty - defineProperties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        configurable: true, // configuravel
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('escreva um numero chapa')
                return;
            }
            estoquePrivado = valor;
        }
    })
}

const p1 = new Produto('camisa', 20, 5)
p1.estoque = 500
//console.log(p1)
console.log(p1.estoque)