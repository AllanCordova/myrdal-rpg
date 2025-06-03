"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = __importDefault(require("./Persona"));
const ClassType_1 = require("../enum/ClassType");
class Player extends Persona_1.default {
    get super() {
        return this._super;
    }
    set super(value) {
        this._super = value;
    }
    startAngel(name) {
        this.name = name;
        this.hp = 300;
        this.maxHp = this.hp;
        this.attack = 200;
        this._super = 2;
        this.defense = 120;
        this.classType = ClassType_1.PlayerClass.Angel;
    }
    startFighter(name) {
        this.name = name;
        this.hp = 400;
        this.maxHp = this.hp;
        this.attack = 130;
        this._super = 1.8;
        this.defense = 170;
        this.classType = ClassType_1.PlayerClass.Fighter;
    }
    startMage(name) {
        this.name = name;
        this.hp = 120;
        this.maxHp = this.hp;
        this.attack = 280;
        this._super = 400;
        this.defense = 50;
        this.classType = ClassType_1.PlayerClass.Mage;
    }
    getStatus() {
        return `Name: ${this.name}, Atk: ${this.attack}, Def: ${this.defense}, Class: ${this.classType}, Super: ${this._super}`;
    }
}
exports.default = Player;
