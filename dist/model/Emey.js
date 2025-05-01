"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = __importDefault(require("./Persona"));
class Enemy extends Persona_1.default {
    startDemon() {
        this.name = "Diablo";
        this.hp = 180;
        this.attack = 220;
        this.defense = 120;
        this.classType = "devil";
    }
}
exports.default = Enemy;
