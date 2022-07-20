import {MyTDDStack} from './MyTDDStack';

test('Can push item', () => {
    const stack = new MyTDDStack<string>();

    const fooStack = stack.push("foo");
    expect(stack.length).toBe(0);
    expect(fooStack.length).toBe(1);
});

test('Can peek item', () => {
   const stack = new MyTDDStack<string>();
   const fooStack = stack.push("foo");

   expect(fooStack.peek()).toBe("foo");
   expect(fooStack.peek()).toBe("foo");
});

test('Can pop off item', () => {
    const stack = new MyTDDStack<string>();
    const barStack = stack.push("foo").push("bar");

    const fooStack = barStack.pop();
    const emptyStack = fooStack?.pop();

    expect(barStack.length).toBe(2);
    expect(fooStack?.length).toBe(1);
    expect(emptyStack?.length).toBe(0);
});
