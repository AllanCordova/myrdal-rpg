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
    battleMenu() {
        console.log(`Your choice!\n1.Attack\n2.Defend`);
        return readline_sync_1.default.question(`Whats your choice ... `);
    }
    personMenu() {
        console.log(`Choice class Type:\n1.Angel\n2.Fighter\n3.Mage`);
        return readline_sync_1.default.question(`Whats your choice ... `);
    }
    playerName() {
        return readline_sync_1.default.question("Whats your person name ... ");
    }
}
exports.default = ViewMenu;
