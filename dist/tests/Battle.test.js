"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = __importDefault(require("../model/Battle"));
const Player_1 = __importDefault(require("../model/Player"));
const Enemy_1 = __importDefault(require("../model/Enemy"));
const hero = new Player_1.default();
const vilon = new Enemy_1.default();
hero.startMage("Auron");
vilon.startGoblin();
const battle = new Battle_1.default(hero, vilon);
while (battle.battleOver()) {
    battle.attackEnemy();
    if (vilon.isLive()) {
        battle.attackPlayer();
    }
}
describe("Teste para verficiar vencedor das Batalhas, no caso o objeto que esteja com a vida completa", () => {
    test("esperado e que o mago derote o Goblin", () => {
        expect(battle.getWinner()).toBe(hero);
    });
});
hero.startAngel("allan");
vilon.startVampire();
const playerDemange = Math.max(hero.attack - vilon.defense, 0);
describe("teste para verificar ocorrência de dano nas batalhas o dano e o atack - a defesa do inimigo, caso a defesa seja maior que o atack o dano e 0 por isso math max", () => {
    test("teste de dano", () => {
        expect(battle.getPlayerDamage()).toBe(playerDemange);
    });
});
