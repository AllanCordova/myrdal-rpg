"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Enemy_1 = __importDefault(require("../model/Enemy"));
const Player_1 = __importDefault(require("../model/Player"));
const ViewConsole_1 = __importDefault(require("../view/ViewConsole"));
const ViewMenu_1 = __importDefault(require("../view/ViewMenu"));
const ControllerSpecial_1 = __importDefault(require("./ControllerSpecial"));
class ControllerPerson {
    constructor(_viewArt) {
        this._viewArt = _viewArt;
        this._player = new Player_1.default();
        this._controllerSpecial = new ControllerSpecial_1.default(0);
        this._viewConsole = new ViewConsole_1.default(_viewArt);
        this._viewMenu = new ViewMenu_1.default(this._viewConsole, _viewArt);
    }
    get controllerSpecial() {
        return this._controllerSpecial;
    }
    startPlayer() {
        const name = this._viewMenu.playerName();
        if (name.trim() === "") {
            this._viewMenu.nameValid();
            return this.startPlayer();
        }
        this.setChargePerson(name);
    }
    setChargePerson(name) {
        switch (this._viewMenu.personMenu()) {
            case "1":
                this._player.startAngel(name);
                this._controllerSpecial.chargeSpeed = 40;
                break;
            case "2":
                this._player.startFighter(name);
                this._controllerSpecial.chargeSpeed = 50;
                break;
            case "3":
                this._player.startMage(name);
                this._controllerSpecial.chargeSpeed = 38;
                break;
            default:
                this._player.startAngel(name);
                this._controllerSpecial.chargeSpeed = 48;
                break;
        }
    }
    startEnemy() {
        const demon = new Enemy_1.default();
        demon.startDemon();
        const orc = new Enemy_1.default();
        orc.startOrc();
        const skeleton = new Enemy_1.default();
        skeleton.startSkeleton();
        const dragon = new Enemy_1.default();
        dragon.startDragon();
        const goblin = new Enemy_1.default();
        goblin.startGoblin();
        const vampire = new Enemy_1.default();
        vampire.startVampire();
        return [demon, orc, skeleton, goblin, vampire, dragon];
    }
}
exports.default = ControllerPerson;
