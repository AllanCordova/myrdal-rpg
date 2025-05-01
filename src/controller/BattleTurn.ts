import Battle from "../model/Battle";

export default class BattleTurn {
  private _battle: Battle;

  public constructor(battle: Battle) {
    this._battle = battle;
  }

  public battleRound(): void {
    this._battle.attackEnemy();
    if (!this._battle.battleOver()) {
      this._battle.attackPlayer();
    }
  }
}
