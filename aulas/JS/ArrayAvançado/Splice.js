//               -5        -4         -3      -2      -1
//                0         1          2       3       4
const nomes = ['bixo', 'douglete', 'piruca', 'jao','carlao'];

// nomes.splice(indice atual, delete, elem1, elem2, elem3 e etc);
const removidos = nomes.splice(1,2, 'brandow', 'elias')
console.log(nomes, removidos)