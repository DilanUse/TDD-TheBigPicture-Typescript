import {MyStack} from './MyStack';
import exp from 'constants';

test('Can pop off item', () => {
    const stack = new MyStack();
    stack.push("foo");
    expect(stack.pop()).toBe("foo");
});

test('Can pop off multiple items', () => {
    const stack = new MyStack();
    stack.push("foo");
    stack.push("bar");
    expect(stack.pop()).toBe("bar");
    expect(stack.pop()).toBe("foo");
});

test('Should fail when pushing null', () => {
    const stack = new MyStack();

    expect(() => stack.push(null)).toThrowError();
});
