"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SpecialAttack {
    constructor(_battle) {
        this._battle = _battle;
    }
    angelLife() {
        this._battle._player.hp = 300 * this._battle._player.super;
    }
    fighterDefense() {
        if (this._battle._player.defense >= 170) {
            this._battle._player.defense *= this._battle._player.super;
        }
        else {
            this._battle._player.defense = 170 * this._battle._player.super;
        }
    }
    mageAttack() {
        const demange = Math.max(this._battle._player.super - this._battle._enemy.defense, 0);
        if (demange === 0) {
            this._battle._enemy.defense -= this._battle._player.super;
        }
        this._battle._enemy.defense = Math.max(this._battle._enemy.defense - this._battle._player.super, 0);
        this._battle._enemy.hp = Math.max(this._battle._enemy.hp - demange, 0);
    }
}
exports.default = SpecialAttack;
