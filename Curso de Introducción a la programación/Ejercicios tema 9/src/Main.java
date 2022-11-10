public class Main {

    public static void main(String[] args) {

    Cliente cliente = new Cliente();
        cliente.edad = 20;
        cliente.telefono = 8754952;
        cliente.nombre = "Lucy";
        cliente.credito = 200000;

        System.out.println("Edad: " + cliente.edad);
        System.out.println("Telefono: " + cliente.telefono);
        System.out.println("Nombre: " + cliente.nombre);
        System.out.println("Credito: "+"$" + cliente.credito);

    Trabajador trabajador = new Trabajador();
        trabajador.edad = 30;
        trabajador.telefono = 89475122;
        trabajador.nombre = "carlos";
        trabajador.salario = 100000;

        System.out.println("Edad: " + trabajador.edad);
        System.out.println("Telefono: " + trabajador.telefono);
        System.out.println("Nombre: " + trabajador.nombre);
        System.out.println("Salario: "+"$" + trabajador.salario);
    }
}

class Persona {
    int edad;
    String nombre;
    int telefono;
}
class Cliente extends Persona {
    int credito;
}
class Trabajador extends Persona {
    int salario;
}