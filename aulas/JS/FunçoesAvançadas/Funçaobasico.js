//declaraçao de funçao (function hoisting)
falaoi()
function falaoi(){
    console.log('oie')
}
// first-class objects (objetos de primeira classe)
// function expression
const souUmDado = function(){
    console.log('sou um dado.')
}
function executaFunçao(funçao){
    console.log('vou executar sua funçao abaixo:')
    funçao()
}
executaFunçao(souUmDado)

//arrow function
const funçaoArrow = () => {
    console.log('hellou amigou')
}

const obj = {
    falar(){
        console.log('academia hj?')
    }
}
obj.falar()