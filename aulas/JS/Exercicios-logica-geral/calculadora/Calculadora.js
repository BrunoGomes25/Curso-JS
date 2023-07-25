function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        inicia(){
            alert('oi, iniciei')
            this.clickBotoes()
            this.pressionaEnter()
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },
        clearDisplay(){
            this.display.value = '';
        },
        apagaUm(){
            this.display.value = this.display.value.slice(0,-1)
        },
        realizaConta(){
            let conta = this.display.value
            try{
                conta = eval(conta)
                if(!conta){
                    alert('meu irmao faça uma conta valida')
                    return
                }
                this.display.value =String(conta)
            }catch(e){
                alert('meu irmao faça uma conta valida')
                return
            }
        },

        clickBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if(el.classList.contains('btn-del')){
                    this.apagaUm()
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            }.bind(this))
        },   
        btnParaDisplay(valor){
            this.display.value += valor
            this.display.focus()
        }    
    }
}
const calculadora = criaCalculadora();
calculadora.inicia()