function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('esperando instancia de date.')
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false})
}

try{const hora = retornaHora();
    console.log(hora)
}catch(e){

}finally{
    console.log('douguinha furou o treino por puro inxame')
}
