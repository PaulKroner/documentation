import java.util.Scanner;

public class Taschenrechner {
    public static void main(String[] args) {
        Scanner benutzereingabe = new Scanner(System.in);
        double zahleins;
        double zahlzwei;
        double ergebnis = 0;

        class Rechner {
            double zahleins;
            double zahlzwei;

            Rechner(double zahleins, double zahlzwei) {
                this.zahleins = zahleins;
                this.zahlzwei = zahlzwei;
            }

            double addition() {
                return zahleins + zahlzwei;
            }

            double subtraktion() {
                return zahleins - zahlzwei;
            }

            double division() {
                return zahleins / zahlzwei;
            }

            double multiplikation() {
                return zahleins * zahlzwei;
            }
        }

        System.out.println("Geben Sie die erste Zahl ein: ");
        zahleins = benutzereingabe.nextDouble();

        System.out.println("Geben Sie die zweite Zahl ein: ");
        zahlzwei = benutzereingabe.nextDouble();

        System.out.println("Geben Sie die Operation ein: (+, -, *, /)");
        String operator = benutzereingabe.next();

        benutzereingabe.close();

        Rechner obj = new Rechner(zahleins, zahlzwei);
        switch (operator) {
            case "+":
                ergebnis = obj.addition();
                break;
            case "-":
                ergebnis = obj.subtraktion();
                break;
            case "/":
                ergebnis = obj.division();
                break;
            case "*":
                ergebnis = obj.multiplikation();
                break;
            default:
                System.out.println("Falsche Eingabe");
        }
        System.out.println(ergebnis);

    }
}
