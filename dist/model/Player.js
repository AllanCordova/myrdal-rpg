"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = __importDefault(require("./Persona"));
class Player extends Persona_1.default {
    startAngel(name) {
        this.name = name;
        this.hp = 300;
        this.attack = 200;
        this.defense = 120;
        this.classType = "angel";
    }
    startFighter(name) {
        this.name = name;
        this.hp = 400;
        this.attack = 130;
        this.defense = 170;
        this.classType = "fighter";
    }
    startMage(name) {
        this.name = name;
        this.hp = 120;
        this.attack = 280;
        this.defense = 50;
        this.classType = "mage";
    }
}
exports.default = Player;
