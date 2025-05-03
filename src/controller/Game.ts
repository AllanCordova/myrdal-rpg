import ViewMenu from "../view/ViewMenu";
import ControllerPerson from "./ControllerPerson";
import ControllerBattle from "./ContollerBattle";
import Db from "../data/Db";
import ViewConsole from "../view/ViewConsole";

export default class Game {
  private _viewMenu: ViewMenu;
  private _controllerPerson: ControllerPerson;
  private _controllerBattle!: ControllerBattle;
  private _viewConsole: ViewConsole;
  private _db: Db;

  public constructor() {
    this._viewConsole = new ViewConsole();
    this._viewMenu = new ViewMenu(this._viewConsole);
    this._controllerPerson = new ControllerPerson();
    this._db = new Db();
  }

  public startGame(): void {
    switch (this._viewMenu.mainMenu()) {
      case "1":
        this._controllerPerson.startPlayer();
        const player = this._controllerPerson._player;

        const enemies = this._controllerPerson.startEnemy();
        this._db.enemys = enemies;

        for (let i = 0; i < this._db.enemys.length; i++) {
          const enemy = this._db.enemys[i];
          this._controllerBattle = new ControllerBattle(player, enemy);
          this._controllerBattle.startBattle();
          this._controllerBattle.endRound();
          if (!player.isLive()) {
            this._controllerBattle.gameOver();
            break;
          }
        }
        break;
      case "2":
        break;
      case "3":
        break;
      default:
        this._viewMenu.fluxValid();
        return this.startGame();
    }
  }
}
