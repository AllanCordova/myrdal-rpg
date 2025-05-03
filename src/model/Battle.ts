import Enemy from "./Emey";
import Player from "./Player";

export default class Battle {
  readonly _player: Player;
  readonly _enemy: Enemy;

  constructor(player: Player, enemy: Enemy) {
    this._player = player;
    this._enemy = enemy;
  }

  public battleOver(): boolean {
    return !this._player.isLive() || !this._enemy.isLive();
  }

  public getWinner(): Player | Enemy {
    return this._player.isLive() ? this._player : this._enemy;
  }

  public attackEnemy(): void {
    const demange: number = Math.max(
      this._player.attack - this._enemy.defense,
      0
    );
    if (demange === 0) {
      this._enemy.defense = this._enemy.defense - this._player.attack;
    }
    this._enemy.defense = Math.max(this._enemy.defense - demange, 0);
    this._enemy.hp = Math.max(this._enemy.hp - demange, 0);
  }

  public attackPlayer(): void {
    const demange: number = Math.max(
      this._enemy.attack - this._player.defense,
      0
    );
    if (demange === 0) {
      this._player.defense = this._player.defense - this._enemy.attack;
    }
    this._player.defense = Math.max(this._player.defense - demange, 0);
    this._player.hp = Math.max(this._player.hp - demange, 0);
  }

  public defendEnemy(): void {
    this._player.defense *= 1.2;
  }

  public defendPlayer(): void {
    this._enemy.defense *= 1.2;
  }

  public getPlayerDamage(): number {
    const damage = Math.max(this._player.attack - this._enemy.defense, 0);
    return damage;
  }

  public getEnemyDamage(): number {
    const demange = Math.max(this._enemy.attack - this._player.defense, 0);
    return demange;
  }
}
