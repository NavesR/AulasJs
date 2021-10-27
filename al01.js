function recNumber(number) {
    if (typeof number !== 'number') return `This is not a number: ${number}`
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz'
    if (number % 3 === 0) return 'Fizz'
    if (number % 5 === 0) return 'Buzz'
    return number
}

for (let i = 0; i <= 100; i++) {
    console.log(i, recNumber(i))
}

console.log(recNumber('My name is Leonardo Naves de Lima, and I am a programmer.'))