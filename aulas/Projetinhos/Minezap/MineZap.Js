const zap = document.querySelector('.Zap')
const digitando = document.getElementById('digitando')
let tempoDigitando;

zap.addEventListener('input', function(){
    digitando.style.display = 'block'
    clearTimeout(tempoDigitando)

    this.tempoDigitando = setTimeout(() =>{
        digitando.style.display = 'none'
    }, 1000)
})