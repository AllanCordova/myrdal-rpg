"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const chalk_1 = __importDefault(require("chalk"));
class ViewMenu {
    constructor(_viewConsole, _viewArt) {
        this._viewConsole = _viewConsole;
        this._viewArt = _viewArt;
    }
    mainMenu() {
        console.clear();
        const text = `${chalk_1.default.bold.cyan(`${this._viewConsole.alignText("", 10)}"The Myrdal Ultimate"`)}\n\n${chalk_1.default.red(this._viewArt.menuArt())}\n${chalk_1.default.magenta(`\n\n1.Iniciar\n2.Sobre\n3.Sair\n`)}`;
        this._viewConsole.showBorder(text);
        return readline_sync_1.default.question(chalk_1.default.yellow("se quiser jogar so apertar 1 (por favor faça isso mestre) ... "));
    }
    showAbout() {
        console.log(chalk_1.default.magenta(`Este jogo foi desenvolvido no 3 período de SI, orientado a objetos, este projeto e escalavel e tem uma arquitetura robusta`));
    }
    showClosedGame() {
        console.log(chalk_1.default.red(`Obrigado por participar desse projeto! volte sempre.`));
    }
    battleMenu() {
        const text = `Seu turno mestre!\n1.Atacar\n2.Defender\n3.Special (não tente usar com a barra incompleta)`;
        this._viewConsole.showBorder(text);
        return readline_sync_1.default.question(chalk_1.default.yellow(`vamos fazer o que essa rodada mestre? ... `));
    }
    personMenu() {
        const text = `Escolha de classe:${chalk_1.default.greenBright(`\n1.Anjo\n2.Guerreiro\n3.Mago`)}`;
        this._viewConsole.showBorder(text);
        return readline_sync_1.default.question(chalk_1.default.yellow(`vamos com o que ... `));
    }
    playerName() {
        console.clear();
        return readline_sync_1.default.question(chalk_1.default.magenta(`Escolha um nome! para seu perssonagem mestre! ... `));
    }
    nameValid() {
        readline_sync_1.default.question(chalk_1.default.red(`preciso de um nome, para te chamar mestre! ... `));
    }
    fluxValid() {
        readline_sync_1.default.question(chalk_1.default.magenta(`"você ta de brincadeira? isso não esta nas opções!" ... `));
    }
}
exports.default = ViewMenu;
