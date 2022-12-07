const datos = {
    nombre: 'Bley',
    apellido: 'Marin',
    edad: 33,
    altura: 178,
    eresDesarrollador: true
}

let edad = datos.edad

let listaDatos = [
    {
        ...datos
    },
    {
        nombre: 'Carlos',
        apellido: 'Rojas',
        edad: 33,
        altura: 176,
        eresDesarrollador: false
    },
    {
        nombre: 'Danny',
        apellido: 'Piedra',
        edad: 25,
        altura: 175,
        eresDesarrollador: true
    }
]


const listaOrdenadaEdad = listaDatos.sort((a, b) => b.edad - a.edad)

console.log(listaOrdenadaEdad)