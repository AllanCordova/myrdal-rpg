import Battle from "./Battle";

export default class SpecialAttack {
  public constructor(private _battle: Battle) {}

  public angelLife(): void {
    this._battle._player.hp = 300 * this._battle._player.super;
  }

  public fighterDefense(): void {
    if (this._battle._player.defense >= 170) {
      this._battle._player.defense = Math.min(
        this._battle._player.defense * this._battle._player.super,
        500
      );
    } else {
      this._battle._player.defense = 170 * this._battle._player.super;
    }
  }

  public mageAttack(): void {
    const demange: number = Math.max(
      this._battle._player.super - this._battle._enemy.defense,
      0
    );
    if (demange === 0) {
      this._battle._enemy.defense -= this._battle._player.super;
    }
    this._battle._enemy.defense = Math.max(
      this._battle._enemy.defense - this._battle._player.super,
      0
    );
    this._battle._enemy.hp = Math.max(this._battle._enemy.hp - demange, 0);
  }
}
