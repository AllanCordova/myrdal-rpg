import Enemy from "../model/Emey";
import Player from "../model/Player";

export default class ControllerPerson {
  readonly _player: Player;
  readonly _enemy: Enemy;

  public constructor() {
    this._player = new Player();
    this._enemy = new Enemy();
  }

  public startPersons(): void {
    this._player.startAngel("Auron");
    this._enemy.startDemon();
  }
}
