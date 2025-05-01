"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Emey_1 = __importDefault(require("../model/Emey"));
const Player_1 = __importDefault(require("../model/Player"));
class ControllerPerson {
    constructor() {
        this._player = new Player_1.default();
        this._enemy = new Emey_1.default();
    }
    startPersons() {
        this._player.startAngel("Auron");
        this._enemy.startDemon();
    }
}
exports.default = ControllerPerson;
