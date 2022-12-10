function verdadero() {
    return true
}

setTimeout(() => console.log("Hola soy una promesa"), 5000)


// function* idPares() {
//     let id = 0
//     while(true) {
//         if(id === 10)
//         yield id += 2
//     }
// }
// const gen = idPares()

// function* idsPares() {
//     let id = 0
//     while(true) {
//         if(id === 20) {
//             return
//         }
//         yield id += 2
//     }
// }
// const gen = idsPares()

// let i = 0
// while( i < 10 ) {
//     i++
//     console.log(gen.next().value)
// }

const ids = prompt('Numero de IDs')

function* idsPares() {
    let id = 0
    while(true) {
        if(id === ids) {
            return
        }
        yield id += 2
    }
}
const gen = idsPares()

const conteo = ids / 2
let i = 0

while( i < conteo ) {
    i++
    console.log(gen.next().value)
}