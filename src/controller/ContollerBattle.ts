import BattleTurn from "./BattleTurn";
import Battle from "../model/Battle";
import Enemy from "../model/Emey";
import Player from "../model/Player";
import ViewBattle from "../view/ViewBattle";
import ViewConsole from "../view/ViewConsole";

export default class ControllerBattle {
  private _battleTurn: BattleTurn;
  private _battle: Battle;
  private _player: Player;
  private _enemy: Enemy;
  private _viewBattle: ViewBattle;
  private _viewConsole: ViewConsole;

  public constructor(player: Player, enemy: Enemy) {
    this._player = player;
    this._enemy = enemy;
    this._battle = new Battle(this._player, this._enemy);
    this._battleTurn = new BattleTurn(this._battle);
    this._viewConsole = new ViewConsole();
    this._viewBattle = new ViewBattle(this._battle, this._viewConsole);
  }

  public startBattle(): void {
    while (!this._battle.battleOver()) {
      this._battleTurn.battleRound();
    }
    if (this._player.isLive()) {
      this._viewBattle.showPlayerWin();
    } else {
      this._viewBattle.showEnemyWin();
    }
  }

  public endRound(): void {
    this._viewBattle.showVictory();
  }

  public gameOver(): void {
    this._battleTurn.gameOver();
  }
}
