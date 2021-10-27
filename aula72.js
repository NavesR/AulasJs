// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        // value: estoque, // valor
        // writable: true, // pode alterar
        configurable: true, // configurável
        get: function() {
            return estoque
        },
        set: function(valor) {
            
        }
    })
}

const p1 = new Produto('Perfume', 300, 4)
console.log(p1)
console.log(p1.estoque)