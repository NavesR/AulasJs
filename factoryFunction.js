// Factory function (Função fábrica)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        nomeComple() {
            return nome + ' ' + sobrenome
        },
        fala(assunto) {
            return `${this.nome} está ${assunto}`
        },
        altura,
        peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Leonardo', 'Naves', 1.70, 55)
console.log(p1.imc)
console.log(p1.fala('falando sobre python'))
console.log(p1.nomeComple())