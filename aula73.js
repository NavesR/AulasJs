/*
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Produto', preco: 1.8, mateiral: 'porcelana' }

for(let entry of Object.entries(produto)) {
    console.log(entry)
}