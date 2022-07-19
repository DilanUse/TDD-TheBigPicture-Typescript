export class FizzBuzzService {
    public print(n: number): string {
        if (FizzBuzzService.isDivisibleByThree(n)
            && FizzBuzzService.isDivisibleByFive(n)) {
            return 'FizzBuzz'
        }

        if (FizzBuzzService.isDivisibleByThree(n)) {
            return 'Fizz'
        }

        if (FizzBuzzService.isDivisibleByFive(n)) {
            return 'Buzz'
        }

        return n.toString();
    }

    private static isDivisibleByThree(n: number): boolean {
        return n % 3 === 0;
    };

    private static isDivisibleByFive(n: number): boolean {
        return n % 5 === 0;
    }

}
