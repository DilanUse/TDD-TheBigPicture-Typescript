export class MyImmutableStack<T> {
    private readonly _items: Array<T>;

    constructor(items: Array<T> | null = null) {
        if (items) {
            this._items = items;
        } else {
            this._items = new Array<T>();
        }
    }

    public get length(): number {
        return this._items.length;
    }

    public peek(): T {
        return this._items[this.length - 1];
    }

    public push(item: T): MyImmutableStack<T> {
        const newItems = new Array<T>(...this._items);
        newItems.push(item);
        return new MyImmutableStack<T>(newItems);
    }


    public pop(): MyImmutableStack<T> {
        const newItems = new Array<T>(...this._items);
        newItems.pop();
        return new MyImmutableStack<T>(newItems);
    }
}
