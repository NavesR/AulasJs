// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
    const sobrenome = 'Naves'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Leonardo'))
    }
    falaNome()
    console.log(idade, peso, altura)
})(17, 55, 1.70)

(function() {

})()