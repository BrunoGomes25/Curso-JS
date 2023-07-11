function soma (x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('escreve um numero porra');
    }

    return x + y
}
try {
    console.log(soma(2,3))
   // console.log(soma('1', 2))
}catch(error){
    console.log(error)
    console.log('hellou amigou, poderia por favor escrever direito')
}