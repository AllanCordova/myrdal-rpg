"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = __importDefault(require("./Persona"));
class Enemy extends Persona_1.default {
    get enemy() {
        return this;
    }
    startDemon() {
        this.name = "Diablo";
        this.hp = 180;
        this.attack = 220;
        this.defense = 120;
        this.classType = "devil";
    }
    startOrc() {
        this.name = "Gorgrul";
        this.hp = 140;
        this.attack = 100;
        this.defense = 80;
        this.classType = "orc";
    }
    startSkeleton() {
        this.name = "Boneclaw";
        this.hp = 70;
        this.attack = 60;
        this.defense = 40;
        this.classType = "undead";
    }
    startDragon() {
        this.name = "Vermithrax";
        this.hp = 300;
        this.attack = 250;
        this.defense = 200;
        this.classType = "dragon";
    }
    startGoblin() {
        this.name = "Snaggle";
        this.hp = 60;
        this.attack = 40;
        this.defense = 30;
        this.classType = "goblin";
    }
    startVampire() {
        this.name = "Nosferatu";
        this.hp = 120;
        this.attack = 150;
        this.defense = 90;
        this.classType = "vampire";
    }
}
exports.default = Enemy;
