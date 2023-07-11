function divisoes (numero){
    if(typeof numero !== 'number'){
        return NaN
    }
    if(numero % 3 ===0 && numero % 5 ===0){
        return 'FizzBuzz'
    }
    if(numero % 3 ===0){
        return 'buzz'
    }
    if(numero % 5 ===0){
        return 'fizz'
    }
    return numero
}
    console.log('a',divisoes('a'))
    for(i = 0; i <= 100; i++){
        console.log(i,divisoes(i))
    }