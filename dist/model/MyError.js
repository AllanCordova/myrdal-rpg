"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyError extends Error {
    constructor(s) {
        super(s);
    }
}
exports.default = MyError;
