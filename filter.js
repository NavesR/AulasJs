// Filter, map, reduce

// retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 11, 15, 22, 23]
const numerosFiltered = numeros.filter((valor, indice) => {
    // console.log(valor, indice)
    return valor > 10
})
// const numerosFiltered = numeros.filter(valor => valor > 10)
// console.log(numerosFiltered)



// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Otavio', idade: 32},
    {nome: 'Ana', idade: 74},
    {nome: 'Eduarda', idade: 12},
    {nome: 'Germanio', idade: 31},
    {nome: 'Gary', idade: 23},
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5 )
const pessoasComMaisDeCinquenta = pessoas.filter(obj => obj.idade > 50)
const nomeComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log([pessoasComNomeGrande, pessoasComMaisDeCinquenta, nomeComA])
