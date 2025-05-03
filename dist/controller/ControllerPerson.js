"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Emey_1 = __importDefault(require("../model/Emey"));
const Player_1 = __importDefault(require("../model/Player"));
const ViewConsole_1 = __importDefault(require("../view/ViewConsole"));
const ViewMenu_1 = __importDefault(require("../view/ViewMenu"));
class ControllerPerson {
    constructor() {
        this._player = new Player_1.default();
        this._viewConsole = new ViewConsole_1.default();
        this._viewMenu = new ViewMenu_1.default(this._viewConsole);
    }
    startPlayer() {
        const name = this._viewMenu.playerName();
        if (name.trim() === "") {
            this._viewMenu.nameValid();
            return this.startPlayer();
        }
        switch (this._viewMenu.personMenu()) {
            case "1":
                this._player.startAngel(name);
                break;
            case "2":
                this._player.startFighter(name);
                break;
            case "3":
                this._player.startMage(name);
                break;
            default:
                this._player.startAngel(name);
                break;
        }
    }
    startEnemy() {
        const demon = new Emey_1.default();
        demon.startDemon();
        const orc = new Emey_1.default();
        orc.startOrc();
        const skeleton = new Emey_1.default();
        skeleton.startSkeleton();
        const dragon = new Emey_1.default();
        dragon.startDragon();
        const goblin = new Emey_1.default();
        goblin.startGoblin();
        const vampire = new Emey_1.default();
        vampire.startVampire();
        return [demon, orc, skeleton, dragon, goblin, vampire];
    }
}
exports.default = ControllerPerson;
