/*
Object.values
Object.entries
Object.assign(des, any)
Object.GetOwnPropertyDescriptor(o, 'prop')
...(spread)

// ja vimos
Object.keys (retorna as chaves)
Object.Freeze (congela o objeto)
Object.defineProperties ( define varias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'produto', preço: 1.8};
console.log(Object.keys(produto))
console.log(Object.values(produto))
console.log(Object.entries(produto))







/* Object.defineProperty(produto, 'nome', {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) */

/* const caneca = Object.assign({}, produto);
console.log(caneca)*/