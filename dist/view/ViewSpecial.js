"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class ViewSpecial {
    constructor(player, enemy) {
        this.player = player;
        this.enemy = enemy;
    }
    dontUse() {
        console.log(chalk_1.default.red(`não podemos usar isso ainda... ${this.player.name}`));
    }
    showLifeAngel() {
        console.log(chalk_1.default.cyanBright(`\n✨ O anjo invoca uma luz celestial...`));
        console.log(chalk_1.default.greenBright(`💖 Sua vida foi restaurada e aumentada para ${this.player.hp}!`));
    }
    showDefenseFighter() {
        console.log(chalk_1.default.yellow(`\n🛡️ O guerreiro entra em posição defensiva...`));
        console.log(chalk_1.default.magentaBright(`🔒 Sua defesa vale ${this.player.defense}`));
    }
    showMageAttack() {
        console.log(chalk_1.default.blueBright("\n✨ O ar se enche de energia arcana..."));
        console.log(chalk_1.default.magentaBright(`${this.player.name} ergue seu cajado e invoca uma ${chalk_1.default.bold("TEMPESTADE ARCANA")}! ⚡🔥`));
        console.log(chalk_1.default.redBright(`${this.enemy.name} é atingido por relâmpagos mágicos e sofre dano devastador!`));
    }
    showCharge(charge) {
        const maxCharge = 100;
        const percent = Math.min(charge, maxCharge);
        const bars = Math.floor((percent / maxCharge) * 20);
        const bar = "█".repeat(bars).padEnd(20, "░");
        console.log(chalk_1.default.green(`\n⚡ Carga Especial: [${chalk_1.default.magenta(bar)}] ${percent}%`));
        if (percent >= maxCharge) {
            console.log(chalk_1.default.greenBright("🔥 Pronto para usar o ataque especial!"));
        }
        else {
            console.log(chalk_1.default.gray("⏳ Continue lutando para carregar seu ataque especial."));
        }
    }
}
exports.default = ViewSpecial;
