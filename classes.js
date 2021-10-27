
class Person {
    constructor(name) {
        this._name = name
    }

    set name(string) {
        this._name = `${string.charAt(0).toUpperCase()}`
    }

    get name() {
        return this._name
    }

    walk() {
        return `${this._name} está andando.`
    }
}

let person = new Person("Naves")
person._name = "gayos"
person._name = 'aosd'

console.log(person._name)