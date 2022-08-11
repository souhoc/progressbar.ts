"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
class Loader {
    constructor(size) {
        this._bar = new Array(size);
        this._size = size;
    }
    start() {
        process.stdout.write("\r\x1B[?25l");
    }
    step(msg, index, limit) {
        this._bar.fill("▓", 0, (index * this._size) / limit);
        this._bar.fill("░", index, this._size);
        if (index === limit)
            this._bar.fill("▓");
        process.stdout.write(`\r${msg} ${this._bar.join("")} ${Math.floor((index * 100) / limit)}% | ${index}/${limit}`);
    }
    end() {
        process.stdout.write("\r\x1B[?25h\n");
    }
}
exports.Loader = Loader;
