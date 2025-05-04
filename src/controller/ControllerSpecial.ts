import SpecialAttack from "../model/SpecialAttack";
import ViewSpecial from "../view/ViewSpecial";

export default class ControllerSpecial {
  private _specialCharge: number = 0;
  private _chargeSpeed: number;
  private _specialAttack!: SpecialAttack;
  private _viewSpecial!: ViewSpecial;

  constructor(chargeSpeed: number) {
    this._chargeSpeed = chargeSpeed;
  }

  public injectSpecialAttack(specialAttack: SpecialAttack): void {
    this._specialAttack = specialAttack;
  }

  public injectViewSpecial(viewSpecial: ViewSpecial): void {
    this._viewSpecial = viewSpecial;
  }

  public atackSpecial(classType: string): void {
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
    } else {
      this._viewSpecial.dontUse();
    }
  }

  public charge(): void {
    this._specialCharge += this._chargeSpeed;
  }

  public canUse(): boolean {
    return this._specialCharge >= 100;
  }

  public reset(): void {
    this._specialCharge = 0;
  }

  public getCharge(): number {
    return this._specialCharge;
  }
}
