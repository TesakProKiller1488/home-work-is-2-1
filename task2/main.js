import java.util.Scanner;

public class TemperatureCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Введите температуру: ");
        int temperature = scanner.nextInt();
        
        if (temperature > 30) {
            System.out.println("Вы можете надеть легкую одежду");
        } else if (temperature > 20) {
            System.out.println("Нужно надеть теплую одежду");
        } else if (temperature < 10) {
            System.out.println("Сегодня холодно, нужно надевать зимнюю одежду");
        } else {
            System.out.println("Температура в пределах нормы");
        }
    }
}