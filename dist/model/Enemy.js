"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = __importDefault(require("./Persona"));
const ClassType_1 = require("../enum/ClassType");
class Enemy extends Persona_1.default {
    get enemy() {
        return this;
    }
    startDemon() {
        this.name = "Diablo";
        this.hp = 180;
        this.maxHp = this.hp;
        this.attack = 220;
        this.defense = 20;
        this.classType = ClassType_1.EnemyClass.Demon;
    }
    startOrc() {
        this.name = "Gorgrul";
        this.hp = 140;
        this.maxHp = this.hp;
        this.attack = 100;
        this.defense = 80;
        this.classType = ClassType_1.EnemyClass.Orc;
    }
    startSkeleton() {
        this.name = "Boneclaw";
        this.hp = 70;
        this.maxHp = this.hp;
        this.attack = 60;
        this.defense = 40;
        this.classType = ClassType_1.EnemyClass.Skeleton;
    }
    startDragon() {
        this.name = "Vermithrax";
        this.hp = 300;
        this.maxHp = this.hp;
        this.attack = 250;
        this.defense = 200;
        this.classType = ClassType_1.EnemyClass.Dragon;
    }
    startGoblin() {
        this.name = "Snaggle";
        this.hp = 60;
        this.maxHp = this.hp;
        this.attack = 40;
        this.defense = 30;
        this.classType = ClassType_1.EnemyClass.Goblin;
    }
    startVampire() {
        this.name = "Nosferatu";
        this.hp = 120;
        this.maxHp = this.hp;
        this.attack = 150;
        this.defense = 90;
        this.classType = ClassType_1.EnemyClass.Vampire;
    }
    getStatus() {
        return `Name: ${this.name}, Atk: ${this.attack}, Def: ${this.defense}, Class: ${this.classType}`;
    }
}
exports.default = Enemy;
