const zap = document.querySelector('.Zap')
const digitando = document.querySelector('.digitando')
let tempoDigitando;

zap.addEventListener('keypress', function(){
    digitando.style.display = 'block'
    clearTimeout(tempoDigitando)

    tempoDigitando = setTimeout(() =>{
        digitando.style.display = 'none'
    }, 1000)
})