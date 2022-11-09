public class Main {
    public static void main(String[] args) {
        Persona persona = new Persona();

        persona.setEdad(34);
        persona.setNombre("carlos");
        persona.setTelefono(87844582);

        System.out.println(persona.getEdad());
        System.out.println(persona.getNombre());
        System.out.println(persona.getTelefono());
    }
}

class Persona {

    private Integer edad;
    private String nombre;
    private Integer telefono;

    // Set
    public void setEdad(Integer edad) {
        this.edad = edad;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setTelefono(Integer telefono) {
        this.telefono = telefono;
    }

    // Get
    public Integer getEdad() {
        return this.edad;
    }
    public String getNombre() {
        return this.nombre;
    }
    public Integer getTelefono() {
        return this.telefono;
    }

}