"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewMenu_1 = __importDefault(require("../view/ViewMenu"));
const ControllerPerson_1 = __importDefault(require("./ControllerPerson"));
const ContollerBattle_1 = __importDefault(require("./ContollerBattle"));
const Db_1 = __importDefault(require("../data/Db"));
const ViewConsole_1 = __importDefault(require("../view/ViewConsole"));
const ViewArt_1 = __importDefault(require("../view/ViewArt"));
const GameState_1 = require("../enum/GameState");
class Game {
    constructor() {
        this._viewArt = new ViewArt_1.default();
        this._viewConsole = new ViewConsole_1.default(this._viewArt);
        this._viewMenu = new ViewMenu_1.default(this._viewConsole, this._viewArt);
        this._controllerPerson = new ControllerPerson_1.default(this._viewArt);
        this._db = new Db_1.default();
    }
    startGame() {
        switch (this._viewMenu.mainMenu()) {
            case GameState_1.GameState.Start:
                this._controllerPerson.startPlayer();
                const player = this._controllerPerson._player;
                const special = this._controllerPerson.controllerSpecial;
                const enemies = this._controllerPerson.startEnemy();
                this._db.enemys = enemies;
                for (let i = 0; i < this._db.enemys.length; i++) {
                    const enemy = this._db.enemys[i];
                    this._controllerBattle = new ContollerBattle_1.default(player, enemy, special, this._viewArt);
                    this._controllerBattle.startBattle();
                    this._controllerBattle.endRound();
                    if (!player.isLive()) {
                        this._controllerBattle.gameOver();
                        break;
                    }
                }
                break;
            case GameState_1.GameState.About:
                this._viewMenu.showAbout();
                break;
            case GameState_1.GameState.Exit:
                this._viewMenu.showClosedGame();
                break;
            default:
                this._viewMenu.fluxValid();
                return this.startGame();
        }
    }
}
exports.default = Game;
