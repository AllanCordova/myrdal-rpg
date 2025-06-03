import ViewMenu from "../view/ViewMenu";
import ControllerPerson from "./ControllerPerson";
import ControllerBattle from "./ContollerBattle";
import Db from "../data/Db";
import ViewConsole from "../view/ViewConsole";
import ViewArt from "../view/ViewArt";
import { GameState } from "../enum/GameState";

export default class Game {
  private _viewMenu: ViewMenu;
  private _viewConsole: ViewConsole;
  private _viewArt: ViewArt;

  private _controllerPerson: ControllerPerson;
  private _controllerBattle!: ControllerBattle;

  private _db: Db;

  public constructor() {
    this._viewArt = new ViewArt();
    this._viewConsole = new ViewConsole(this._viewArt);
    this._viewMenu = new ViewMenu(this._viewConsole, this._viewArt);
    this._controllerPerson = new ControllerPerson(this._viewArt);
    this._db = new Db();
  }

  public startGame(): void {
    try {
      switch (this._viewMenu.mainMenu()) {
        case GameState.Start:
          this._controllerPerson.startPlayer();
          const player = this._controllerPerson._player;
          const special = this._controllerPerson.controllerSpecial;

          const enemies = this._controllerPerson.startEnemy();
          this._db.enemys = enemies;

          for (let i = 0; i < this._db.enemys.length; i++) {
            const enemy = this._db.enemys[i];
            this._controllerBattle = new ControllerBattle(
              player,
              enemy,
              special,
              this._viewArt
            );
            this._controllerBattle.startBattle();
            this._controllerBattle.endRound();
            if (!player.isLive()) {
              this._controllerBattle.gameOver();
              break;
            }
          }
          break;
        case GameState.About:
          this._viewMenu.showAbout();
          break;
        case GameState.Exit:
          this._viewMenu.showClosedGame();
          break;
        default:
          this._viewMenu.fluxValid();
          return this.startGame();
      }
    } catch (erro) {
      this._viewConsole.writeLine(`Erro inesperado ${(erro as Error).message}`);
      this.startGame();
    }
  }
}
