"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const index_2 = require("../model/index");
const index_3 = require("../view/index");
class ControllerBattle {
    constructor(player, enemy, controllerSpecial, viewArt) {
        this._player = player;
        this._enemy = enemy;
        this._battle = new index_2.Battle(this._player, this._enemy);
        this._specialAttack = new index_2.SpecialAttack(this._battle);
        this._viewSpecial = new index_3.ViewSpecial(this._player, this._enemy, viewArt);
        this._controllerSpecial = controllerSpecial;
        this._controllerSpecial.injectSpecialAttack(this._specialAttack);
        this._controllerSpecial.injectViewSpecial(this._viewSpecial);
        this._battleTurn = new index_1.BattleTurn(this._battle, this._controllerSpecial, this._viewSpecial, viewArt);
        this._viewConsole = new index_3.ViewConsole(viewArt);
        this._viewBattle = new index_3.ViewBattle(this._battle, this._viewConsole);
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
