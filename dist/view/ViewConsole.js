"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
class ViewConsole {
    constructor(_viewArt) {
        this._viewArt = _viewArt;
    }
    writeLine(value) {
        console.log(value);
    }
    showBorder(text) {
        console.log(`----------------------------------------`);
        console.log(text);
        console.log(`----------------------------------------`);
    }
    isRight() {
        readline_sync_1.default.question(`podemos continuar mestre? ... `);
    }
    nextRound() {
        readline_sync_1.default.question(`precione ...`);
    }
    alignText(text, length) {
        return text + " ".repeat(Math.max(0, length - text.length));
    }
    showArt() {
        const player = this._viewArt.failArt();
        const enemy = this._viewArt.demonArt();
        const range = Math.max(player.length, enemy.length);
        let art = "";
        for (let i = 0; i < range; i++) {
            const linhaPlayer = (player[i] || "").padEnd(50, " ");
            const linhaEnemy = enemy[i] || "";
            art += `${linhaPlayer} ${linhaEnemy}\n`;
        }
        return art;
    }
}
exports.default = ViewConsole;
