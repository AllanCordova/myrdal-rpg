"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    constructor() {
        this._elements = [];
    }
    set elements(value) {
        this.elements = value;
    }
    add(element) {
        this._elements.push(element);
    }
    findById(id) {
        return this._elements.find(element => element.id === id);
    }
    getAll() {
        return this._elements;
    }
    count() {
        return this._elements.length;
    }
}
exports.default = Repository;
