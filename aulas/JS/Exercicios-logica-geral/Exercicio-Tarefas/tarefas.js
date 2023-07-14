const addNewQuest = document.querySelector('.add-new-quest')
const botaoNovaTarefa = document.querySelector('.botao-nova-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaBotaoApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    li.appendChild(botaoApagar)
}

function criaLi(){
    const li = document.createElement('li')
    return li
}
addNewQuest.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
       // console.log("pega maldiçao")
        if(!addNewQuest.value) return
         criaTarefa(addNewQuest.value)
    }
})
function limpaInput(){
    addNewQuest.value = ''
    addNewQuest.focus()
}
function criaTarefa(textoInput){
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
}



botaoNovaTarefa.addEventListener('click', function(e){
    if(!addNewQuest.value) return
    criaTarefa(addNewQuest.value)
})