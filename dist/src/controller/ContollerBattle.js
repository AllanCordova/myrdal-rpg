"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BattleTurn_1 = __importDefault(require("./BattleTurn"));
const Battle_1 = __importDefault(require("../model/Battle"));
const SpecialAttack_1 = __importDefault(require("../model/SpecialAttack"));
const ViewBattle_1 = __importDefault(require("../view/ViewBattle"));
const ViewConsole_1 = __importDefault(require("../view/ViewConsole"));
const ViewSpecial_1 = __importDefault(require("../view/ViewSpecial"));
class ControllerBattle {
    constructor(player, enemy, controllerSpecial, viewArt) {
        this._player = player;
        this._enemy = enemy;
        this._battle = new Battle_1.default(this._player, this._enemy);
        this._specialAttack = new SpecialAttack_1.default(this._battle);
        this._viewSpecial = new ViewSpecial_1.default(this._player, this._enemy, viewArt);
        this._controllerSpecial = controllerSpecial;
        this._controllerSpecial.injectSpecialAttack(this._specialAttack);
        this._controllerSpecial.injectViewSpecial(this._viewSpecial);
        this._battleTurn = new BattleTurn_1.default(this._battle, this._controllerSpecial, this._viewSpecial, viewArt);
        this._viewConsole = new ViewConsole_1.default(viewArt);
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
