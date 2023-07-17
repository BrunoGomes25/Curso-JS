const addNewQuest = document.querySelector('.add-new-quest')
const botaoNovaTarefa = document.querySelector('.botao-nova-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaBotaoApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
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
    salvarTarefa()
}



botaoNovaTarefa.addEventListener('click', function(e){
    if(!addNewQuest.value) return
    criaTarefa(addNewQuest.value)
})

document.addEventListener('click', function(e){
    const el = e.target
    if (el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefa()
    }
})

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []
    for ( let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar',' ').trim()
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}
function adcionaTaredasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas)
    console.log(tarefas)
}
adcionaTaredasSalvas()