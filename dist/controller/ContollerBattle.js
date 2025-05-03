"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BattleTurn_1 = __importDefault(require("./BattleTurn"));
const Battle_1 = __importDefault(require("../model/Battle"));
const ViewBattle_1 = __importDefault(require("../view/ViewBattle"));
const ViewConsole_1 = __importDefault(require("../view/ViewConsole"));
class ControllerBattle {
    constructor(player, enemy) {
        this._player = player;
        this._enemy = enemy;
        this._battle = new Battle_1.default(this._player, this._enemy);
        this._battleTurn = new BattleTurn_1.default(this._battle);
        this._viewConsole = new ViewConsole_1.default();
        this._viewBattle = new ViewBattle_1.default(this._battle, this._viewConsole);
    }
    startBattle() {
        while (!this._battle.battleOver()) {
            this._battleTurn.battleRound();
        }
        if (this._player.isLive()) {
            this._viewBattle.showPlayerWin();
        }
        else {
            this._viewBattle.showEnemyWin();
        }
    }
    endRound() {
        this._viewBattle.showVictory();
    }
    gameOver() {
        this._battleTurn.gameOver();
    }
}
exports.default = ControllerBattle;
