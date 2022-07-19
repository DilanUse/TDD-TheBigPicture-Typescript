export class MyStack {
    private _items: any[];

    public constructor() {
        this._items = [];
    }

    public push(item: any): void {
        if (item == null) {
            throw new Error();
        }

        this._items.push(item);
    }

    public pop(): any {
        return this._items.pop();
    }
}
