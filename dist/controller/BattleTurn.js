"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewMenu_1 = __importDefault(require("../view/ViewMenu"));
const ViewBattle_1 = __importDefault(require("../view/ViewBattle"));
const ViewConsole_1 = __importDefault(require("../view/ViewConsole"));
const BattleState_1 = require("../enum/BattleState");
class BattleTurn {
    constructor(battle, controllerSpecial, viewSpecial, viewArt) {
        this._battle = battle;
        this._controllerSpecial = controllerSpecial;
        this._viewConsole = new ViewConsole_1.default(viewArt);
        this._viewMenu = new ViewMenu_1.default(this._viewConsole, viewArt);
        this._viewBattle = new ViewBattle_1.default(this._battle, this._viewConsole);
        this._viewSpecial = viewSpecial;
    }
    gameOver() {
        this._viewBattle.showDefeated();
    }
    battleRound() {
        this._viewBattle.showFighters();
        this._viewSpecial.showCharge(this._controllerSpecial.specialCharge);
        this.playerChoice();
        this._controllerSpecial.charge();
        if (!this._battle.battleOver()) {
            this.enemyChoice();
        }
        this._viewBattle.battleStatus();
    }
    playerChoice() {
        switch (this._viewMenu.battleMenu()) {
            case BattleState_1.BattleState.attack:
                this.playerChoiceAttack();
                break;
            case BattleState_1.BattleState.defend:
                this.playerChoideDefend();
                break;
            case BattleState_1.BattleState.atackSpecial:
                this._controllerSpecial.atackSpecial(this._battle._player.classType);
                this._controllerSpecial.reset();
                break;
            default:
                this.playerChoiceAttack();
        }
    }
    enemyChoice() {
        const options = ["attack", "defend"];
        const index = Math.floor(Math.random() * options.length);
        switch (options[index]) {
            case "attack":
                this.enemyChoiceAttack();
                break;
            case "defend":
                this.enemyChoiceDefend();
                break;
        }
    }
    playerChoiceAttack() {
        this._viewBattle.showDamagePlayer();
        this._battle.attackEnemy();
        this._viewBattle.defenseEnemy();
    }
    playerChoideDefend() {
        this._battle.defendEnemy();
        this._viewBattle.showDefendPlayer();
    }
    enemyChoiceAttack() {
        this._viewBattle.showDamageEnemy();
        this._battle.attackPlayer();
        this._viewBattle.defensePlayer();
    }
    enemyChoiceDefend() {
        this._battle.defendPlayer();
        this._viewBattle.showDefendEnemy();
    }
}
exports.default = BattleTurn;
