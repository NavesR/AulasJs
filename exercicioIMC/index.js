// Capturar evento de submit do formulário
const form = document.querySelector('#form')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('Evento previnido')
    setResult('Olaaa')
})

function setResult (message) {
    const result = document.querySelector('#resultado')
    result.innerHTML = ''
    const p = document.createElement('p')
    p.classList.add('paragrado-resultado')
    p.innerHTML = 'Qualquer coisa'
    result.appendChild(p)
}