"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
class ViewMenu {
    mainMenu() {
        console.log(`Myrdal\n1.start\n2.about\n3.exit`);
        return readline_sync_1.default.question("Whats your choice ... ");
    }
}
exports.default = ViewMenu;
