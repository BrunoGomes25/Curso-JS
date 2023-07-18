function retornafunçao(){
    const nome = 'luiz'
    return function(){
        return nome;
    };
}
const funçao = retornafunçao()
console.log(funçao())