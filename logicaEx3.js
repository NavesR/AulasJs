/* Escreva uma função que recebe um número e
retorne o seguinte:
Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número não é divisível por 3 e 5 = retorna o proprio número
Checar se o número é realmente um número = Retorna o próprio número
Use a função com números de 0 a 100
*/

const divNumber = (number) => {
    if (number % 3 == 0 && number % 5 == 0) {
        return 'FizzBuzz'
    } else if (number % 3 == 0) {
        return 'Fizz'
    } else if (number % 5 == 0) {
        return 'Buzz'
    } else {
        return number
    }
}

for (let i = 0; i <= 100; i++) {console.log(i, divNumber(i))}
