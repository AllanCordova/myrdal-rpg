"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = exports.ControllerSpecial = exports.ControlerPerson = exports.ControllerBattle = exports.BattleTurn = void 0;
var BattleTurn_1 = require("./BattleTurn");
Object.defineProperty(exports, "BattleTurn", { enumerable: true, get: function () { return __importDefault(BattleTurn_1).default; } });
var ContollerBattle_1 = require("./ContollerBattle");
Object.defineProperty(exports, "ControllerBattle", { enumerable: true, get: function () { return __importDefault(ContollerBattle_1).default; } });
var ControllerPerson_1 = require("./ControllerPerson");
Object.defineProperty(exports, "ControlerPerson", { enumerable: true, get: function () { return __importDefault(ControllerPerson_1).default; } });
var ControllerSpecial_1 = require("./ControllerSpecial");
Object.defineProperty(exports, "ControllerSpecial", { enumerable: true, get: function () { return __importDefault(ControllerSpecial_1).default; } });
var Game_1 = require("./Game");
Object.defineProperty(exports, "Game", { enumerable: true, get: function () { return __importDefault(Game_1).default; } });
