// new Object -> Object.prototype
function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
} 
Produto.prototype.desconto = function (percentual)  {
    this.preco = this.preco - (this.preco * (percentual / 100))
};
Produto.prototype.aumento = function(percentual)  {
    this.preco = this.preco + (this.preco * (percentual / 100))
};
const p1 = new Produto('Tshirt tatakae', 55)
p1.desconto(0)
p1.aumento(10)
console.log(p1)







/* const objA = {
    chaveA: 'A'
    // __proto__: Object.Prototype
}

const objB = {
    chaveB: 'B'
    // __proto__: objA
}
const objC = new Object();g
objC.chave = 'C'
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objC.chaveA) */