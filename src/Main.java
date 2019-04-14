public class Main {

    public static void main(String[] args) {
        System.out.println(calculateMultiplicationWithoutMultiply(2, 5));
        System.out.println(calculateMultiplicationWithoutMultiply(4, 9));
        System.out.println(calculateMultiplicationWithoutMultiply(3, 2));

        System.out.println(calculateMultiplicationWithoutMultiplyUsingRecursion(2, 5));
        System.out.println(calculateMultiplicationWithoutMultiplyUsingRecursion(4, 9));
        System.out.println(calculateMultiplicationWithoutMultiplyUsingRecursion(3, 2));

        System.out.println(calculateWithDivide(2, 5));
        System.out.println(calculateWithDivide(4, 9));
        System.out.println(calculateWithDivide(3, 2));

        System.out.println(russianPeasant(2, 5));
        System.out.println(russianPeasant(4, 9));
        System.out.println(russianPeasant(3, 2));
    }


    //calculate the multiplication of two numbers without using multiply operation
    private static int calculateMultiplicationWithoutMultiply(int number1, int number2) {

        int sum = 0;

        for (int i = 1; i <= number2; i++) {
            sum += number1;
        }

        return sum;
    }

    private static int calculateMultiplicationWithoutMultiplyUsingRecursion(int number1, int number2) {

        if (number1 == 0 || number2 == 0) {
            return 0;
        }
        return number1 + calculateMultiplicationWithoutMultiplyUsingRecursion(number1, number2 - 1);
    }

    private static double calculateWithDivide(double number1, double number2) {

        return 0 == number2 ? 0 : number1 / (1 / number2);
    }

    private static int russianPeasant(int number1, int number2) {
        int result = 0;

        // While second number doesn't become 1
        while (number2 > 0) {
            // If second number becomes odd,
            // add the first number to result
            if ((number2 & 1) != 0) {
                result = result + number1;
            }

            // Double the first number
            // and halve the second number
            number1 = number1 << 1;
            number2 = number2 >> 1;
        }
        return result;
    }
}