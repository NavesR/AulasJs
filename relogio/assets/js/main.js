function relogio(){
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    
    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    let segundos = 1
    let timer
    
    function iniciarRelogio() {
        timer = setInterval(function() {
            segundos++
            relogio.innerHTML = criaHoraDosSegundos(segundos)
        }, 1000)
    }
    
    iniciar.addEventListener('click', function(event) {
        clearInterval(timer)
        iniciarRelogio()
        relogio.style.color = "#000000"
    })
    
    pausar.addEventListener('click', function(event) {
       clearInterval(timer) 
       relogio.style.color = "#ff0000"
    })
    
    zerar.addEventListener('click', function(event) {
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
        relogio.style.color = "#6B5"
    })
}

relogio()