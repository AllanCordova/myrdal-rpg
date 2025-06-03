import Enemy from "../model/Enemy";
import Player from "../model/Player";

export interface BattleContract {
  readonly _player: Player;
  readonly _enemy: Enemy;
}
