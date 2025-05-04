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
        console.log(chalk_1.default.green(`🎉🎉🎉 parece que você acabou com todo mundo, parabéns ${this._battle._player.name}!! 🎉🎉`));
    }
    showPlayerWin() {
        this._viewConsole.showBorder();
        console.log(chalk_1.default.greenBright(`🎉 ${this._battle._player.name} venceu com honra (ou quase)! Parabéns, guerreiro! 🏆`));
        this._viewConsole.showBorder();
        this._viewConsole.nextRound();
    }
    showEnemyWin() {
        this._viewConsole.showBorder();
        console.log(chalk_1.default.redBright(`💀 ${this._battle._enemy.name} levou a melhor! Parece que o herói tropeçou na própria espada...`));
        this._viewConsole.showBorder();
        this._viewConsole.nextRound();
    }
    showDefeated() {
        console.clear();
        this._viewConsole.showBorder();
        console.log(chalk_1.default.red(`Gostei de você ${this._battle._player.name} foi bom enquanto durou!`));
        this._viewConsole.showBorder();
    }
    showFighters() {
        console.clear();
        this._viewConsole.showBorder();
        console.log(chalk_1.default.cyanBright.bold("Fighters") +
            "\n" +
            chalk_1.default.green(this._battle._player.getStatus()) +
            "\n" +
            chalk_1.default.red(this._battle._enemy.getStatus()));
        this._viewConsole.showBorder();
    }
    showDamagePlayer() {
        console.log(`${chalk_1.default.greenBright(this._battle._player.name)} atacou com vontade e causou ` +
            chalk_1.default.redBright.bold(`${this._battle.getPlayerDamage()} de dano`) +
            ` em ${chalk_1.default.yellowBright(this._battle._enemy.name)}! `);
    }
    showDamageEnemy() {
        console.log(`${chalk_1.default.yellowBright(this._battle._enemy.name)} revidou com tudo e causou ` +
            chalk_1.default.redBright.bold(`${this._battle.getEnemyDamage()} de dano`) +
            ` em ${chalk_1.default.greenBright(this._battle._player.name)}! `);
    }
    defenseEnemy() {
        console.log(`Agora o escudo do coitado tá em ${chalk_1.default.cyanBright(this._battle._enemy.defense)} pontos. 🛡️`);
    }
    defensePlayer() {
        console.log(`O escudo dele sobreviveu com ${chalk_1.default.cyanBright(this._battle._player.defense)} pontos. 🛡️`);
    }
    showDefendPlayer() {
        console.log(`${chalk_1.default.green(this._battle._player.name)} se precaveu e aumentou sua defesa para ` +
            `${chalk_1.default.cyan(this._battle.playerDefend)} pontos! 🛡️`);
    }
    showDefendEnemy() {
        console.log(`${chalk_1.default.yellow(this._battle._enemy.name)} entrou na defensiva, aumentando sua defesa para ` +
            `${chalk_1.default.cyan(this._battle.enemyDefend)} pontos! 🛡️`);
    }
    battleStatus() {
        this._viewConsole.showBorder();
        console.log(`\n${chalk_1.default.magentaBright.bold("🛡️  Battle Status")}\n`);
        const player = this._battle._player;
        const enemy = this._battle._enemy;
        const playerBox = `
  ╔════════════════════════════════════════════╗
  ║ ${chalk_1.default.bold(this._viewConsole.alignText("Player", 43))}║
  ║ Name:   ${chalk_1.default.green(this._viewConsole.alignText(player.name, 35))}║
  ║ Class:  ${chalk_1.default.green(this._viewConsole.alignText(player.classType, 35))}║
  ║ HP:     ${chalk_1.default.green(this._viewConsole.alignText(player.hp.toString(), 35))}║
  ║ DEF:    ${chalk_1.default.green(this._viewConsole.alignText(player.defense.toString(), 35))}║
  ╚════════════════════════════════════════════╝`;
        const enemyBox = `
  ╔════════════════════════════════════════════╗
  ║ ${chalk_1.default.bold(this._viewConsole.alignText("Enemy", 43))}║
  ║ Name:   ${chalk_1.default.red(this._viewConsole.alignText(enemy.name, 35))}║
  ║ Class:  ${chalk_1.default.red(this._viewConsole.alignText(enemy.classType, 35))}║
  ║ HP:     ${chalk_1.default.red(this._viewConsole.alignText(enemy.hp.toString(), 35))}║
  ║ DEF:    ${chalk_1.default.red(this._viewConsole.alignText(enemy.defense.toString(), 35))}║
  ╚════════════════════════════════════════════╝`;
        console.log(playerBox + "\n" + enemyBox);
        this._viewConsole.showBorder();
        this._viewConsole.isRight();
    }
    dontUseSpecial() {
        console.log(chalk_1.default.red(`ainda não podemos usar isso!!`));
    }
}
exports.default = ViewBattle;
