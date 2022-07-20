import {MyImmutableStack} from './MyImmutableStack';

test('Can pop off item', () => {
    const stack = new MyImmutableStack<string>();

    const fooStack = stack.push("foo");
    expect(stack.length).toBe(0);
    expect(fooStack.length).toBe(1);

    const result = fooStack.peek();
    expect(fooStack.peek()).toBe("foo");
    expect(fooStack.peek()).toBe("foo");

    const emptyStack = fooStack.pop();
    expect(emptyStack.length).toBe(0);
    expect(fooStack.length).toBe(1);
});
