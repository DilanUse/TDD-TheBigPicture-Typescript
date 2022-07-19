import {FizzBuzzService} from './FizzBuzzService';

const fizzBuzzService = new FizzBuzzService();

test('Should print number', () => {
    expect(fizzBuzzService.print(2)).toBe("2");
});

test('Should print Fizz', () => {
    expect(fizzBuzzService.print(3)).toBe("Fizz");
});

test('Should print Buzz', () => {
    expect(fizzBuzzService.print(5)).toBe("Buzz");
    expect(fizzBuzzService.print(10)).toBe("Buzz");
});

test('Should print FizzBuzz', () => {
    expect(fizzBuzzService.print(15)).toBe("FizzBuzz");
    expect(fizzBuzzService.print(30)).toBe("FizzBuzz");
});
