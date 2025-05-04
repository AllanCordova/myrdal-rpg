"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const chalk_1 = __importDefault(require("chalk"));
class ViewMenu {
    constructor(_viewConsole) {
        this._viewConsole = _viewConsole;
    }
    mainMenu() {
        console.clear();
        this._viewConsole.showBorder();
        console.log(`${chalk_1.default.bold.cyan(`"The Myrdal Ultimate"`)}${chalk_1.default.magenta(`\n\n1.Iniciar\n2.Sobre\n3.Sair\n`)}`);
        this._viewConsole.showBorder();
        return readline_sync_1.default.question(chalk_1.default.yellow("se quiser jogar so apertar 1 (por favor faça isso mestre) ... "));
    }
    battleMenu() {
        this._viewConsole.showBorder();
        console.log(`Seu turno mestre!\n1.Atacar\n2.Defender\n3.Special (não tente usar com a barra incompleta)`);
        this._viewConsole.showBorder();
        return readline_sync_1.default.question(chalk_1.default.yellow(`vamos fazer o que essa rodada mestre? ... `));
    }
    personMenu() {
        this._viewConsole.showBorder();
        console.log(`Choice class Type:\n1.Angel\n2.Fighter\n3.Mage`);
        this._viewConsole.showBorder();
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
