// filter => sempre retorna um array, com a mesma quantidade de elementos ou menos
// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];  
function callbackFilter(valor, indice, array){
    if(valor > 10){
        return true
    }else{
        return false
    }
}
const numerosFiltrados = numeros.filter(callbackFilter)
console.log(numerosFiltrados)




// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a