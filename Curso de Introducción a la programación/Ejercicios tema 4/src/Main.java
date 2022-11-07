public class Main {

    public static void main(String[] args) {

        int numeroIf = 12;

        if (numeroIf > 0) {
            System.out.println(" El NumeroIf es positivo");
        } else if (numeroIf < 0) {
            System.out.println("El numeroIf es negativo");
        }else {
            System.out.println("El numeroIf es 0");
        }


        int numeroWhile = 0;

        while (numeroWhile < 3) {
            System.out.println(numeroWhile);
            numeroWhile = numeroWhile + 1;
        }


        int numeroDoWhile = 3;

        do {
            System.out.println(numeroDoWhile);
            numeroDoWhile = numeroDoWhile + 1;
        } while (numeroDoWhile < 3);


        for (int numeroFor = 0; numeroFor <= 3; numeroFor = numeroFor + 1 ) {
            System.out.println(numeroFor);
        }


        var estacion = "sabado";

        switch (estacion) {
            case "primavera":
                System.out.println("Estamos en Primavera");
                break;
            case "verano":
                System.out.println("Estamos en Verano");
                break;
            case "otoño":
                System.out.println("Estamos en Otoño");
                break;
            case "invierno":
                System.out.println("Estamos en Invierno");
                break;
            default:
                System.out.println("No es una Estación!!");
        }

    }
}