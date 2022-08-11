export declare class Loader {
    private _bar;
    private _size;
    constructor(size: number);
    start(): void;
    step(msg: string, index: number, limit: number): void;
    end(): void;
}
