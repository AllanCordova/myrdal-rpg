"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const chalk_1 = __importDefault(require("chalk"));
class ViewArt {
    menuArt() {
        const art = (0, fs_1.readFileSync)("assets/menu.txt", "utf-8");
        return art;
    }
    failArt() {
        const art = chalk_1.default.green((0, fs_1.readFileSync)("assets/fail.txt", "utf-8"));
        return art.split("\n");
    }
    demonArt() {
        const art = chalk_1.default.magenta((0, fs_1.readFileSync)("assets/demon.txt", "utf-8"));
        return art.split("\n");
    }
    mageArt() {
        const art = chalk_1.default.blue((0, fs_1.readFileSync)("assets/mage.txt", "utf-8"));
        return art;
    }
}
exports.default = ViewArt;
