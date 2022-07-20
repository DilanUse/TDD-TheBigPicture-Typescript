export class MyTDDStack<T> {
    private _count: number;
    private _item: T | null;
    private _previousStack: MyTDDStack<T> | null;

    public constructor() {
        this._count = 0;
        this._item = null;
        this._previousStack = null;
    }

    private initStack(previousStack: MyTDDStack<T>, count: number, item: T) {
        this._previousStack = previousStack;
        this._count = count;
        this._item = item;
    }


    public get length(): number {
        return this._count;
    }

    public peek(): T | null {
        return this._item;
    }

    public push(item: T): MyTDDStack<T> {
        const newStack = new MyTDDStack<T>();
        newStack.initStack(this, this.length + 1, item);
        return newStack;
    }

    public pop(): MyTDDStack<T> | null {
        return this._previousStack;
    }
}
