class Estudiante {
    nombre = 'Bley'
    asignaturas = ['Javascript', 'HTML', 'CSS']

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}
const estudiante = new Estudiante() 

estudiante.obtenDatos()