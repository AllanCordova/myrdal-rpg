import Battle from "../model/Battle";

export default class ViewBattle {
  constructor(private _battle: Battle) {}

  public showDefeated(): void {
    console.log(`It looks like ${this._battle._player.name} has been defeated`);
  }

  public showFighters(): void {
    console.log(
      `Fighters\n${this._battle._player.getStatus()}\n${this._battle._enemy.getStatus()}`
    );
  }

  public showAtackPlayer(): void {
    console.log(
      `${this._battle._player.name} attack ${
        this._battle._enemy.name
      } dealing ${this._battle.getPlayerDamage()} damage`
    );
  }

  public showAtackEnemy(): void {
    console.log(
      `${this._battle._enemy.name} attack ${
        this._battle._player.name
      } dealing ${this._battle.getEnemyDamage()} damage`
    );
  }
}
