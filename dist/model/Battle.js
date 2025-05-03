"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Battle {
    constructor(player, enemy) {
        this._player = player;
        this._enemy = enemy;
    }
    battleOver() {
        return !this._player.isLive() || !this._enemy.isLive();
    }
    getWinner() {
        return this._player.isLive() ? this._player : this._enemy;
    }
    attackEnemy() {
        const demange = Math.max(this._player.attack - this._enemy.defense, 0);
        if (demange === 0) {
            this._enemy.defense = this._enemy.defense - this._player.attack;
        }
        this._enemy.defense = Math.max(this._enemy.defense - this._player.attack, 0);
        this._enemy.hp = Math.max(this._enemy.hp - demange, 0);
    }
    attackPlayer() {
        const demange = Math.max(this._enemy.attack - this._player.defense, 0);
        if (demange === 0) {
            this._player.defense = this._player.defense - this._enemy.attack;
        }
        this._player.defense = Math.max(this._player.defense - this._enemy.attack, 0);
        this._player.hp = Math.max(this._player.hp - demange, 0);
    }
    defendEnemy() {
        this._player.defense = Math.floor(this._player.defense * 1.3);
    }
    defendPlayer() {
        this._enemy.defense = Math.floor(this._enemy.defense * 1.3);
    }
    getPlayerDamage() {
        const damage = Math.max(this._player.attack - this._enemy.defense, 0);
        return damage;
    }
    getEnemyDamage() {
        const demange = Math.max(this._enemy.attack - this._player.defense, 0);
        return demange;
    }
    get playerDefend() {
        return this._player.defense;
    }
    get enemyDefend() {
        return this._enemy.defense;
    }
}
exports.default = Battle;
