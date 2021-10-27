// Declaração de função (Function hoisting)
function falarValor(valor) {
    console.log(valor)
}

// First-class objects (Objetos de primeira classe)
// Funciton expression
const nome = function (valor) {
    console.log('Helloo')
}

// Function que executa uma function
function executaFunction(functionName) {
    functionName()
}
executaFunction(nome)


// Arrow function 
const arrowFunction = () => {
    console.log('Sou uma arrow function')
}
executaFunction(arrowFunction)

// set and clear interval with setTimeout integrated
let interval = setInterval(arrowFunction, 1000)
const timeout = () => {
    clearInterval(interval)
}
setTimeout(timeout, 5000)

// Dentro de um object
const obj = {
    falar: function(valor) {
        console.log(valor)
    }
}
obj.falar('olaa')