function Person(name, surname){
    this.userName = name;
    this.userSurName= surname;
    this.age = 18;
    // this.initial = function(letter){
    //     return `${this.userName[letter]}.${this.userSurName[letter]}`
    // }
}
const gabrieli = new Person("Gabriel", "Molodini")
gabrieli.initial = function(letter){
        return `${this.userName[letter].toUpperCase()}.${this.userSurName[letter].toUpperCase()}`
}
console.log(gabrieli.initial(1))