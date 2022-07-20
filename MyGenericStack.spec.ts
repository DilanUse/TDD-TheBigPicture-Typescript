import {MyGenericStack} from './MyGenericStack';

test('Can pop off item', () => {
   const stack = new MyGenericStack<string>();
   stack.push("foo");
   expect(stack.pop()).toBe("foo");
});

test('Can pop off multiple items', () => {
    const stack = new MyGenericStack<string>();
    // stack.push("foo");
    // stack.push("bar");
    stack.push("foo").push("bar");
    expect(stack.pop()).toBe("bar");
    expect(stack.pop()).toBe("foo");
});

test('Can pop from empty stack', () => {
    const stack = new MyGenericStack<string>();
    expect(stack.pop()).toBeUndefined();
})

