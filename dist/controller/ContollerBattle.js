"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BattleTurn_1 = __importDefault(require("./BattleTurn"));
const Battle_1 = __importDefault(require("../model/Battle"));
class ControllerBattle {
    constructor(player, enemy) {
        this._player = player;
        this._enemy = enemy;
        this._battle = new Battle_1.default(this._player, this._enemy);
        this._battleTurn = new BattleTurn_1.default(this._battle);
    }
    startBattle() {
        while (!this._battle.battleOver()) {
            this._battleTurn.battleRound();
        }
    }
    endRound() {
        return this._battle.getWinner();
    }
    gameOver() {
        this._battleTurn.gameOver();
    }
}
exports.default = ControllerBattle;
