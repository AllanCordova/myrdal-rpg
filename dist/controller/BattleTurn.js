"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewMenu_1 = __importDefault(require("../view/ViewMenu"));
const ViewBattle_1 = __importDefault(require("../view/ViewBattle"));
class BattleTurn {
    constructor(battle) {
        this._battle = battle;
        this._viewMenu = new ViewMenu_1.default();
        this._viewBattle = new ViewBattle_1.default(this._battle);
    }
    gameOver() {
        this._viewBattle.showDefeated();
    }
    battleRound() {
        this._viewBattle.showFighters();
        this.playerChoice();
        if (!this._battle.battleOver()) {
            this.enemyChoice();
        }
    }
    playerChoice() {
        switch (this._viewMenu.battleMenu()) {
            case "1":
                this._viewBattle.showAtackPlayer();
                this._battle.attackEnemy();
                break;
            case "2":
                this._battle.defendEnemy();
                break;
            default:
                this._battle.attackEnemy();
        }
    }
    enemyChoice() {
        const options = ["attack", "defend"];
        const index = Math.floor(Math.random() * options.length);
        switch (options[index]) {
            case "attack":
                this._viewBattle.showAtackEnemy();
                this._battle.attackPlayer();
            case "defend":
                this._battle.defendPlayer();
            default:
                this._battle.attackPlayer();
        }
    }
}
exports.default = BattleTurn;
