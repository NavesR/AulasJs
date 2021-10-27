// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map) 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor
    // console.log(acumulador, valor)
    return acumulador
}, 0)
// console.log(total)



const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Luiza', idade: 12},
    {nome: 'Eduardo', idade: 34},
    {nome: 'Letícia', idade: 21},
    {nome: 'Rosana', idade: 98},
    {nome: 'Léo', idade: 43},
]
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) acumulador
    return valor
})
console.log(maisVelha)