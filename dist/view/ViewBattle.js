"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ViewBattle {
    constructor(_battle) {
        this._battle = _battle;
    }
    showDefeated() {
        console.log(`It looks like ${this._battle._player.name} has been defeated`);
    }
    showFighters() {
        console.log(`Fighters\n${this._battle._player.getStatus()}\n${this._battle._enemy.getStatus()}`);
    }
    showAtackPlayer() {
        console.log(`${this._battle._player.name} attack ${this._battle._enemy.name} dealing ${this._battle.getPlayerDamage()} damage`);
    }
    showAtackEnemy() {
        console.log(`${this._battle._enemy.name} attack ${this._battle._player.name} dealing ${this._battle.getEnemyDamage()} damage`);
    }
}
exports.default = ViewBattle;
