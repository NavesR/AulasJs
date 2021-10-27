// Dobre os números
//
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosDobrados = numeros.map(valor => valor * 2) 
// console.log(numerosDobrados)

// Para cada elemento: 
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Luiza', idade: 12},
    {nome: 'Eduardo', idade: 34},
    {nome: 'Letícia', idade: 21},
    {nome: 'Rosana', idade: 98},
    {nome: 'Léo', idade: 43},
]
const nomes = pessoas.map(obj => obj.nome)
const idades = pessoas.map(obj => ({ idade: obj.idade }))
const comId = pessoas.map((obj, indice) => {
    const newObj = {...obj}
    newObj.id = indice
    return newObj
})
console.log(comId)
