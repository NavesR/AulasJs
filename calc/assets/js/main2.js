function Calculadora() {
    this.display = document.querySelector('.display')
    this.btnClear = document.querySelector('.btn-clear')
    this.btnDel = document.quertySelector('.btn-del')

    this.inicia = function() {
        this.cliqueBotoes()
        this.pressionaEnter()
    }

    this.pressionaEnter = function() {
        document.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.realizaConta()
            }
        })
    }

    this.clearDisplay() = function() {
        this.display.value = ''
    }

    this.apagaUm = function() {
        this.display.value = this.display.valueslice(0, -1)
    }

    this.realizaConta = function() {
        let conta = this.display.value
        try {
            conta = eval(conta)
            if (!conta) {
                alert('Conta invalida')
                return
            }
            this.display.value = String(conta)
        } catch(e) {
            alert('Conta invalida')
            return
        }
    }

    this.cliqueBotoes = function() {
        document.addEventListener('click', event => {
            const el = event.target
            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText)

            if (el.classList.contains('btn-clear')) this.clearDisplay()
                
            if (el.classList.contains('btn-del')) this.apagaUm()

            if (el.classList.contains('btn-equal')) this.realizaConta()
        })
    }

    this.btnParaDisplay = () => {this.display.value += valor}
}

const calculadora = new Calculadora()
calculadora.inicia()
