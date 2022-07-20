export class MyGenericStack<T> {
    private _items = new Array<T>();

    // public push(item: T): void {
    //     this._items.push(item);
    // }

    public push(item: T): MyGenericStack<T> {
        this._items.push(item);
        return this;
    }

    public pop(): T | undefined {
        return this._items.pop();
    }
}
