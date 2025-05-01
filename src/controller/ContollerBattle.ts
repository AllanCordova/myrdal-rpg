import BattleTurn from "./BattleTurn";
import Battle from "../model/Battle";
import Enemy from "../model/Emey";
import Player from "../model/Player";

export default class ControllerBattle {
  private _battleTurn: BattleTurn;
  private _battle: Battle;
  private _player: Player;
  private _enemy: Enemy;

  public constructor(player: Player, enemy: Enemy) {
    this._player = player;
    this._enemy = enemy;
    this._battle = new Battle(player, enemy);
    this._battleTurn = new BattleTurn(this._battle);
  }

  public startBattle(): void {
    while (!this._battle.battleOver()) {
      this._battleTurn.battleRound();
    }
  }

  public endRound(): Player | Enemy {
    return this._battle.getWinner();
  }
}
