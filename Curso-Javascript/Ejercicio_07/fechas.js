const fechaActual = new Date()

const fechaNacimiento = new Date(1989,6,10)

const fechaComparacion = fechaActual > fechaNacimiento

const diaNacimiento = fechaNacimiento.getDate()
const mesNacimiento = fechaNacimiento.getMonth() + 1
const anyoNacimiento = fechaNacimiento.getFullYear()
