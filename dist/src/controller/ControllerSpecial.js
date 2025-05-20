"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControllerSpecial {
    constructor(chargeSpeed) {
        this._specialCharge = 0;
        this._chargeSpeed = chargeSpeed;
    }
    injectSpecialAttack(specialAttack) {
        this._specialAttack = specialAttack;
    }
    injectViewSpecial(viewSpecial) {
        this._viewSpecial = viewSpecial;
    }
    atackSpecial(classType) {
        if (this.canUse()) {
            switch (classType) {
                case "fighter":
                    this._specialAttack.fighterDefense();
                    this._viewSpecial.showDefenseFighter();
                    break;
                case "angel":
                    this._specialAttack.angelLife();
                    this._viewSpecial.showLifeAngel();
                    break;
                case "mage":
                    this._specialAttack.mageAttack();
                    this._viewSpecial.showMageAttack();
                    break;
            }
        }
        else {
            this._viewSpecial.dontUse();
        }
    }
    charge() {
        this._specialCharge += this._chargeSpeed;
    }
    canUse() {
        return this._specialCharge >= 100;
    }
    reset() {
        this._specialCharge = 0;
    }
    getCharge() {
        return this._specialCharge;
    }
}
exports.default = ControllerSpecial;
