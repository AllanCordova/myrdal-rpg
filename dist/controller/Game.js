"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewMenu_1 = __importDefault(require("../view/ViewMenu"));
const ControllerPerson_1 = __importDefault(require("./ControllerPerson"));
const ContollerBattle_1 = __importDefault(require("./ContollerBattle"));
const Db_1 = __importDefault(require("../data/Db"));
class Game {
    constructor() {
        this._viewMenu = new ViewMenu_1.default();
        this._controllerPerson = new ControllerPerson_1.default();
        this._db = new Db_1.default();
    }
    startGame() {
        switch (this._viewMenu.mainMenu()) {
            case "1":
                this._controllerPerson.startPlayer();
                const player = this._controllerPerson._player;
                const enemies = this._controllerPerson.startEnemy();
                this._db.enemys = enemies;
                for (let i = 0; i < this._db.enemys.length; i++) {
                    const enemy = this._db.enemys[i];
                    this._controllerBattle = new ContollerBattle_1.default(player, enemy);
                    this._controllerBattle.startBattle();
                    console.log(this._controllerBattle.endRound());
                    if (!player.isLive()) {
                        this._controllerBattle.gameOver();
                        break;
                    }
                }
                break;
            case "2":
                break;
            case "3":
                break;
            default:
                console.log("it is not value valid!");
        }
    }
}
exports.default = Game;
