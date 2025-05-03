"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    isLive() {
        return this.hp > 0;
    }
    getStatus() {
        return `Name: ${this.name}, HP: ${this.hp}, Atk: ${this.attack}, Def: ${this.defense}`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get hp() {
        return this._hp;
    }
    set hp(value) {
        this._hp = value;
    }
    get attack() {
        return this._attack;
    }
    set attack(value) {
        this._attack = value;
    }
    get defense() {
        return this._defense;
    }
    set defense(value) {
        this._defense = value;
    }
    get classType() {
        return this._classType;
    }
    set classType(value) {
        this._classType = value;
    }
}
exports.default = Persona;
