let listaCompra = [ 'pan', 'cafe', 'mantequilla', 'arroz', 'pollo' ];

listaCompra.push('Aceite de girasol');

listaCompra.pop();

let peliculasFAvoritas = [
    { 
        titulo: 'matrix', 
        director: 'Hermanas Wachowski', 
        fecha: new Date(1999, 3, 31)
    },
    {
        titulo: 'El cuervo', 
        director: 'Alex Proyas', 
        fecha: new Date(1994, 5, 11)
    },
    {
        titulo: 'Final Fantasy VII: Advent Children', 
        director: 'Tetsuya Nomura', 
        fecha: new Date(2005, 8, 14)
    }
]

const filtrarPeliculas = peliculasFAvoritas.filter(pelicula => pelicula.fecha > new Date(2010, 1, 2010));



const directores = peliculasFAvoritas.map(peli =>  peli.director);

const titulos = peliculasFAvoritas.map(peli =>  peli.titulo);

const conDirectoresTitulos = directores.concat(titulos);

const propDirectoresTitulos = [...directores, ...titulos];


console.log(propDirectoresTitulos);