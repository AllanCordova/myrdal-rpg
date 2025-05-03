"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
class ViewConsole {
    showBorder() {
        console.log(`---------------------------`);
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
}
exports.default = ViewConsole;
