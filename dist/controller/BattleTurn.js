"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BattleTurn {
    constructor(battle) {
        this._battle = battle;
    }
    battleRound() {
        this._battle.attackEnemy();
        if (!this._battle.battleOver()) {
            this._battle.attackPlayer();
        }
    }
}
exports.default = BattleTurn;
