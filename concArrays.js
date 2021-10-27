const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [7, 8, 9]
// const a4 = a1.concat(a2,['Luiza', 'Otavio'], a3)

// ... rest -> ... spresd
const a4 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]]
console.log(a4)