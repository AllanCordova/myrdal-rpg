import BattleTurn from "./BattleTurn";
import ControllerSpecial from "./ControllerSpecial";
import Battle from "../model/Battle";
import Enemy from "../model/Enemy";
import Player from "../model/Player";
import SpecialAttack from "../model/SpecialAttack";
import ViewBattle from "../view/ViewBattle";
import ViewConsole from "../view/ViewConsole";
import ViewSpecial from "../view/ViewSpecial";
import ViewArt from "../view/ViewArt";

export default class ControllerBattle {
  private _battleTurn: BattleTurn;
  private _controllerSpecial: ControllerSpecial;
  private _battle: Battle;
  private _player: Player;
  private _enemy: Enemy;
  private _specialAttack: SpecialAttack;
  private _viewBattle: ViewBattle;
  private _viewConsole: ViewConsole;
  private _viewSpecial: ViewSpecial;

  public constructor(
    player: Player,
    enemy: Enemy,
    controllerSpecial: ControllerSpecial,
    viewArt: ViewArt
  ) {
    this._player = player;
    this._enemy = enemy;
    this._battle = new Battle(this._player, this._enemy);

    this._specialAttack = new SpecialAttack(this._battle);
    this._viewSpecial = new ViewSpecial(this._player, this._enemy, viewArt);

    this._controllerSpecial = controllerSpecial;
    this._controllerSpecial.injectSpecialAttack(this._specialAttack);
    this._controllerSpecial.injectViewSpecial(this._viewSpecial);

    this._battleTurn = new BattleTurn(
      this._battle,
      this._controllerSpecial,
      this._viewSpecial,
      viewArt
    );
    this._viewConsole = new ViewConsole(viewArt);
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
