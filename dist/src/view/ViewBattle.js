"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class ViewBattle {
    constructor(_battle, _viewConsole) {
        this._battle = _battle;
        this._viewConsole = _viewConsole;
    }
    showVictory() {
        console.clear();
        const text = chalk_1.default.bgGreen.black.bold(`\n✨ Vitória Gloriosa! ${this._battle._player.name} derrotou todos os inimigos e salvou o reino! ✨\n`);
        this._viewConsole.showBorder(text);
    }
    showPlayerWin() {
        const text = chalk_1.default.greenBright(`🏅 ${this._battle._player.name} triunfou sobre o inimigo! A justiça prevaleceu!`);
        this._viewConsole.showBorder(text);
        this._viewConsole.nextRound();
    }
    showEnemyWin() {
        const text = chalk_1.default.redBright(`☠️ ${this._battle._enemy.name} venceu essa batalha... Mas a guerra ainda não acabou!`);
        this._viewConsole.showBorder(text);
        this._viewConsole.nextRound();
    }
    showDefeated() {
        console.clear();
        const text = chalk_1.default.redBright.bold(`😔 ${this._battle._player.name} foi derrotado... Mas os heróis sempre têm uma segunda chance!`);
        this._viewConsole.showBorder(text);
    }
    showFighters() {
        const title = chalk_1.default.cyanBright.bold("⚔️ Início do Combate ⚔️");
        const names = `${this._viewConsole.alignText(`${chalk_1.default.bgBlue(this._battle._player.name)}`, 50)} ${chalk_1.default.bgRed(this._battle._enemy.name)}`;
        const art = this._viewConsole.showArt();
        const battleStatus = `${chalk_1.default.green(`${this._battle._player.getStatus()}, hp: ${this.generateHpBar(this._battle._player.hp, this._battle._player.maxHp, 8)}`)}\n\n${chalk_1.default.red(`${this._battle._enemy.getStatus()}, hp: ${this.generateHpBar(this._battle._enemy.hp, this._battle._enemy.maxHp, 8)}`)}`;
        console.clear();
        this._viewConsole.showBorder(title.padStart(45, ""));
        console.log(names);
        this._viewConsole.showBorder(art);
        this._viewConsole.showBorder(battleStatus);
    }
    generateHpBar(current, max, barLength = 20) {
        const percentage = current / max;
        const limitedPercentage = Math.min(percentage, 1);
        const filledLength = Math.round(limitedPercentage * barLength);
        const emptyLength = barLength - filledLength;
        const filledBarChar = "█";
        const emptyBarChar = "░";
        let colorFn = chalk_1.default.green;
        if (current > max) {
            colorFn = chalk_1.default.cyan;
        }
        else if (percentage < 0.3) {
            colorFn = chalk_1.default.red;
        }
        else if (percentage < 0.6) {
            colorFn = chalk_1.default.yellow;
        }
        const filledBar = colorFn(filledBarChar.repeat(filledLength));
        const emptyBar = emptyBarChar.repeat(emptyLength);
        return `${current}/${max}  ${filledBar}${emptyBar}`;
    }
    showDamagePlayer() {
        console.clear();
        console.log(`${chalk_1.default.greenBright(this._battle._player.name)} desferiu um golpe heroico causando ` +
            chalk_1.default.redBright.bold(`${this._battle.getPlayerDamage()} de dano`) +
            ` em ${chalk_1.default.yellowBright(this._battle._enemy.name)}! 💥`);
    }
    showDamageEnemy() {
        console.log(`${chalk_1.default.yellowBright(this._battle._enemy.name)} lançou um contra-ataque brutal causando ` +
            chalk_1.default.redBright.bold(`${this._battle.getEnemyDamage()} de dano`) +
            ` em ${chalk_1.default.greenBright(this._battle._player.name)}! 😱`);
    }
    defenseEnemy() {
        console.log(`${chalk_1.default.yellow(this._battle._enemy.name)} levantou seu escudo! Defesa atual: ` +
            chalk_1.default.cyanBright(`${this._battle._enemy.defense} 🛡️`));
    }
    defensePlayer() {
        console.log(`${chalk_1.default.green(this._battle._player.name)} resiste bravamente! Defesa atual: ` +
            chalk_1.default.cyanBright(`${this._battle._player.defense} 🛡️`));
    }
    showDefendPlayer() {
        console.log(`${chalk_1.default.green(this._battle._player.name)} entrou em posição defensiva. Defesa elevada para ` +
            chalk_1.default.cyan(`${this._battle.playerDefend} 🛡️`));
    }
    showDefendEnemy() {
        console.log(`${chalk_1.default.yellow(this._battle._enemy.name)} recuou e protegeu-se. Defesa aumentada para ` +
            chalk_1.default.cyan(`${this._battle.enemyDefend} 🛡️`));
    }
    battleStatus() {
        console.log(`\n${chalk_1.default.magentaBright.bold("📊 Status da Batalha")}\n`);
        const player = this._battle._player;
        const enemy = this._battle._enemy;
        const playerBox = `
╔════════════════════════════════════════════╗
║ ${chalk_1.default.bold(this._viewConsole.alignText("🧙 Jogador", 43))}║
║ Nome:   ${chalk_1.default.green(this._viewConsole.alignText(player.name, 35))}║
║ Classe: ${chalk_1.default.green(this._viewConsole.alignText(player.classType, 35))}║
║ HP:     ${this._viewConsole.alignText(this.generateHpBar(this._battle._player.hp, this._battle._player.maxHp), 35)}║
║ DEF:    ${chalk_1.default.green(this._viewConsole.alignText(player.defense.toString(), 35))}║
╚════════════════════════════════════════════╝`;
        const enemyBox = `
╔════════════════════════════════════════════╗
║ ${chalk_1.default.bold(this._viewConsole.alignText("👹 Inimigo", 43))}║
║ Nome:   ${chalk_1.default.red(this._viewConsole.alignText(enemy.name, 35))}║
║ Classe: ${chalk_1.default.red(this._viewConsole.alignText(enemy.classType, 35))}║
║ HP:     ${this._viewConsole.alignText(this.generateHpBar(this._battle._enemy.hp, this._battle._enemy.maxHp), 35)}║
║ DEF:    ${chalk_1.default.red(this._viewConsole.alignText(enemy.defense.toString(), 35))}║
╚════════════════════════════════════════════╝`;
        this._viewConsole.showBorder(playerBox + "\n" + enemyBox);
        this._viewConsole.isRight();
    }
    dontUseSpecial() {
        console.log(chalk_1.default.red.bold(`🚫 Você ainda não pode usar sua habilidade especial! Espere o momento certo...`));
    }
}
exports.default = ViewBattle;
